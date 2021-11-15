import React from 'react'

function Work() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
                <section className="work" id="work">
                    <h2 className="work__header">Work</h2>

                    <div className="work__container">
                        <div className="work__item">
                            <div className="work__item-image">
                                <img src="#" alt="Covid tracker with React.js" />
                            </div>
                            <div className="work__item-text">
                                <h3 className="work__item-text-header">
                                    <a href="#" />
                                </h3>
                                <p className="work__item-text-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec euismod, nisl eget consectetur tempor, nisi nunc
                                    interdum nisi, euismod consectetur nisi nunc euismod.
                                </p>
                            </div>
                        </div>
                        <div className="work__item">
                            <div className="work__item-image">
                                <img src="#" alt="JavaScript" />
                            </div>
                            <div className="work__item-text">
                                <h3 className="work__item-text-header">
                                    <a href="#" />
                                </h3>
                                <p className="work__item-text-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec euismod, nisl eget consectetur tempor, nisi nunc
                                    interdum nisi, euismod consectetur nisi nunc euismod.
                                </p>
                            </div>
                        </div>
                        <div className="work__item">
                            <div className="work__item-image">
                                <img src="#" alt="React.js" />
                            </div>
                            <div className="work__item-text">
                                <h3 className="work__item-text-header">
                                    <a href="#" />
                                </h3>
                                <p className="work__item-text-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec euismod, nisl eget consectetur tempor, nisi nunc
                                    interdum nisi, euismod consectetur nisi nunc euismod.
                                </p>
                            </div>
                        </div>
                        <div className="work__item">
                            <div className="work__item-image">
                                <img src="#" alt="previous portfolio page" />
                            </div>
                            <div className="work__item-text">
                                <h3 className="work__item-text-header">
                                    <a href="#" />
                                </h3>
                                <p className="work__item-text-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec euismod, nisl eget consectetur tempor, nisi nunc
                                    interdum nisi, euismod consectetur nisi nunc euismod.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

        </div>
    )
}

export default Work;