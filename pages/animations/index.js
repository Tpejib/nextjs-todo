import { MainLayout } from "../../components/MainLayout";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import cn from 'classnames'
import styles from './animations.module.scss'
import fadeTransition from '../../styles/transitions/fade.module.scss'

export default function Animations() {

    const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
    return (
        <MainLayout>
            {showButton && (
                <div
                onClick={() => setShowMessage(true)}
                style={{background: 'red'}}
                >
                Show Message
                </div>
                
            )}
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames={fadeTransition}
                unmountOnExit
                onEnter={() => setShowButton(false)}
                onExited={() => setShowButton(true)}
            >
                <div
                variant="primary"
                onClose={() => setShowMessage(false)}
                style={{background: 'blue'}}
                >
                <div className={styles.root}>
                    Animated alert message
                </div>
                <p>
                    This alert message is being transitioned in and
                    out of the DOM.
                </p>
                <div style={{background: 'red'}} onClick={() => setShowMessage(false)}>
                    Close
                </div>
                </div>
            </CSSTransition>
        </MainLayout>
    )
}