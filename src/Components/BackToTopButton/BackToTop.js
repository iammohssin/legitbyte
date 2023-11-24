import React, { useState } from 'react';
import { BiSolidUpArrowCircle } from 'react-icons/bi';
import { Button } from './BackToTopStyles';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setVisible(true);
        } else if (scrolled <= 50) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button visible={visible}>
            <BiSolidUpArrowCircle
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
            />
        </Button>
    );
};

export default ScrollButton;
