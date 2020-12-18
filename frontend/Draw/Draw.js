/* global window */
import React, { Component } from 'react';
import { css } from '@emotion/core';

class Draw extends Component {

    componentDidMount() {
        const canvas = document.querySelector('#draw');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 100;
        ctx.globalCompositeOperation = 'hard-lights'; // can play with blend modes

        document.body.style.overflowX = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'relative';
        document.body.style.margin = '0';
        document.body.style.padding = '0';

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        let lastTouchX = 0;
        let lastTouchY = 0;
        let hue = 0;
        let direction = true;

        function draw(e) {
            if (!isDrawing) return; // stops fn from running when not moused down
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath();
            // start from
            ctx.moveTo(lastX, lastY);
            // go to
            const [offsetX, offsetY] = e.offsetX ? [e.offsetX, e.offsetY]: [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
            ctx.lineTo(offsetX, offsetY);
            // actually draws a line that's visible
            ctx.stroke();
            [lastX, lastY] = e.offsetX ? [e.offsetX, e.offSetY] : [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
            hue++;
            if (hue >= 360) hue = 0;
            if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1) {
                direction = !direction;
            }
            if (direction) {
                ctx.lineWidth++;
            } else {
                ctx.lineWidth--;
            }
        }

        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offSetY];
        });
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);

        canvas.addEventListener('touchstart', (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.changedTouches[0].pageX, e.changedTouches[0].pageX];
        });
        canvas.addEventListener('touchend', () => isDrawing = false);
        canvas.addEventListener('touchcancel', () => isDrawing = false);
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            draw(e);
        }); 
    }

    render() {

        return (
            <div>
                <canvas id="draw" width="800" height="800"></canvas>
            </div>
        );
    }
}

export default Draw;