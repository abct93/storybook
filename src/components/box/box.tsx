import React from 'react';
import styled from 'styled-components';

export const Box: React.FC<Props> = (props) => {
    return (
        <StyledBox className={props.className ? props.className : 'simple'}>
            <StyledParagraph>{props.children}</StyledParagraph>
        </StyledBox>
    );
};

interface Props {
    className?: string
    children: string
}

const StyledBox = styled.div`
    padding: 0.5em 1em;
    margin: 2em 0;

    &.simple {
        font-weight: bold;
        border: solid 3px #000000;
    }

    &.rounded {
        font-weight: bold;
        color: #6091d3;
        background: #FFF;
        border: solid 3px #6091d3;
        border-radius: 10px;
    }

    &.background {
        color: #2c2c2f;
        background: #cde4ff;
    }

    &.horizontal-border {
        color: #2c2c2f;
        background: #cde4ff;
        border-top: solid 5px #5989cf;
        border-bottom: solid 5px #5989cf;
    }

    &.double {
        border: double 5px #4ec4d3;
    }

    &.dashed {
        background: #f0f7ff;
        border: dashed 2px #5b8bd0;
    }

    &.vertical-border {
        color: #474747;
        background: whitesmoke;
        border-left: double 7px #4ec4d3;
        border-right: double 7px #4ec4d3;
    }

    &.sticky {
        color: #232323;
        background: #fff8e8;
        border-left: solid 10px #ffc06e;
    }

    &.label-top {
        color: #ff7d6e;
        background: #ffebe9;
        border-top: solid 10px #ff7d6e;
    }

    &.shadow {
        color: #00BCD4;
        background: #e4fcff;
        border-top: solid 6px #1dc1d6;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);
    }

    &.smart {
        color: #5d627b;
        background: white;
        border-top: solid 5px #5d627b;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
    }

    &.board {
        color: #5989cf;
        background: #c6e4ff;
        border-bottom: solid 6px #aac5de;
        border-radius: 9px;
    }

    &.board-shadow {
        color: #FFF;
        background: #6eb7ff;
        border-bottom: solid 6px #3f87ce;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
    }
`;

const StyledParagraph = styled.p`
    margin: 0;
    padding: 0;
`;