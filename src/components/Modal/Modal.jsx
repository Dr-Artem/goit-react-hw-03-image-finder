import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', event => {
            if (event.code === 'Escape') {
                console.log('pressed esc');
                console.log(this.props.onClose());
                this.props.onClose();
            }
        });
    }
    render() {
        return (
            <div className={style.overlay}>
                <div className={style.modal}>{this.props.children}</div>
            </div>
        );
    }
}
