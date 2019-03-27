import React, { useState, useEffect, memo } from 'react';
import classnames from 'classnames';
import './TypeWriter.scss';
import {
  clearRequestInterval,
  requestInterval,
  clearRequestTimeout,
  requestTimeout,
} from '../../utils';
import { useInView } from 'react-intersection-observer';

const TypeWriter = memo(
  ({
    texts,
    typingSpeed = 55,
    pauseAfterTyping = 2000,
    deletingSpeed = 25,
    pauseAfterDeleting = 450,
    cursorBlinkSpeed = 500,
    onTextChange,
    ...otherProps
  }) => {
    const screenReaderText = (
      <span className="screen-reader-only">{texts.join(', ')}.</span>
    );

    texts = texts.map(text => text.split(''));

    const [[activeText, activeLetter], setActiveIndexes] = useState([0, 0]);
    const [isCursorActive, setIsCursorActive] = useState(false);
    const [ref, isInView] = useInView({ rootMargin: '15% 0px 0px 0px' });

    useEffect(() => {
      if (!isInView) return;

      let typingTimeout = requestTimeout(handleTyping, typingSpeed);

      function handleDelete() {
        setActiveIndexes(([activeText, activeLetter]) => {
          // Delete the previous letter
          activeLetter--;

          // If there are any letters left
          if (activeLetter >= 0) {
            // Delete them one by one
            typingTimeout = requestTimeout(handleDelete, deletingSpeed);
            return [activeText, activeLetter];
          } else {
            // Start typing the next line
            typingTimeout = requestTimeout(handleTyping, pauseAfterDeleting);
            return [(activeText + 1) % texts.length, -1];
          }
        });
      }

      function handleTyping() {
        setActiveIndexes(([activeText, activeLetter]) => {
          // Write the next letter
          activeLetter++;

          if (activeLetter >= texts[activeText].length) {
            activeLetter = texts[activeText].length - 1;
          }

          const isLastLetter = activeLetter === texts[activeText].length - 1;

          if (isLastLetter) {
            typingTimeout = requestTimeout(handleDelete, pauseAfterTyping);
          } else {
            typingTimeout = requestTimeout(handleTyping, typingSpeed);
          }

          if (onTextChange && activeLetter === 1) {
            onTextChange();
          }

          return [activeText, activeLetter];
        });
      }

      const cursorBlinkingInterval = requestInterval(
        () => setIsCursorActive(setIsCursorActive => !setIsCursorActive),
        cursorBlinkSpeed
      );

      return () => {
        clearRequestTimeout(typingTimeout);
        clearRequestInterval(cursorBlinkingInterval);
      };
    }, [isInView]);

    return (
      <>
        {screenReaderText}
        <span
          className="type-writer"
          aria-hidden="true"
          {...otherProps}
          ref={ref}
        >
          {texts.map((text, textIndex) => (
            <span className="type-writer__text" key={`${textIndex}`}>
              {text.map((letter, letterIndex) => {
                const isActiveText = textIndex === activeText;
                const isRestingAfterDelete =
                  letterIndex === 0 && activeLetter === -1;
                const isActiveLetter =
                  letterIndex === activeLetter || isRestingAfterDelete;

                return (
                  <span
                    className="type-writer__text__letter"
                    key={`${textIndex}-${letterIndex}`}
                  >
                    <span
                      className={classnames(
                        'type-writer__text__letter__cursor',
                        {
                          'type-writer__text__letter__cursor--visible':
                            isActiveText && isActiveLetter && isCursorActive,
                          'type-writer__text__letter__cursor--resting': isRestingAfterDelete,
                        }
                      )}
                    />
                    <span
                      className={classnames(
                        'type-writer__text__letter__label',
                        {
                          'type-writer__text__letter__label--visible':
                            isActiveText && letterIndex <= activeLetter,
                        }
                      )}
                    >
                      {letter}
                    </span>
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      </>
    );
  }
);

export default TypeWriter;
