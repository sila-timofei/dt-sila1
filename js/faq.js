window.addEventListener('DOMContentLoaded', function () {
            // close / open FAQ
            const containerQuestions = document.querySelector('.questions');

            function closeAllQuestions() {
                containerQuestions
                    .querySelectorAll('.questions__body')
                    .forEach(qBody => {
                        qBody.style.cssText += 'height: ' 
                            + qBody.querySelector('.questions__title').clientHeight
                            + 'px;';

                        qBody
                            .querySelector('.questions__btn')
                            .classList
                            .remove('questions__btn_close');
                    });
            }

            function transtionTo(elm, newH) {
                if (!newH || newH === 0) {
                    newH = 0;

                    Array.prototype.forEach.call(elm.children, child => {
                        if (child.tagName = 'DIV') newH += child.clientHeight;
                    });
                }

                elm.style.cssText = 'height: ' + newH + 'px;';
            }

            containerQuestions.querySelectorAll('.questions__body').forEach(qBody => {
                    qBody.querySelector('.questions__title').addEventListener('click', event => {
                            let isOnlyClose = event
                                .target
                                .classList
                                .contains('questions__btn_close');

                            closeAllQuestions();

                            if (isOnlyClose) return;

                            qBody
                                .querySelector('.questions__btn')
                                .classList
                                .add('questions__btn_close');

                            transtionTo(qBody);
                     });
            });

            closeAllQuestions();
        });