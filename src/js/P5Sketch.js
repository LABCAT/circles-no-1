import React, { useEffect } from "react";
import PlayIcon from './PlayIcon.js';
import './globals';
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";
import audio from '../audio/circles-no-1.mp3'

const P5Sketch = () => {
    const Sketch = p => {

        p.canvas = null;

        p.canvasWidth = window.innerWidth;

        p.canvasHeight = window.innerHeight;

        p.song = null;

        p.notes = [
            {
                "duration": 0.833332,
                "durationTicks": 30720,
                "midi": 64,
                "name": "E4",
                "ticks": 0,
                "time": 0,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.833332,
                "durationTicks": 30720,
                "midi": 66,
                "name": "F#4",
                "ticks": 30720,
                "time": 0.833332,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.666664,
                "durationTicks": 61440,
                "midi": 67,
                "name": "G4",
                "ticks": 61440,
                "time": 1.666664,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000004,
                "durationTicks": 30720,
                "midi": 66,
                "name": "F#4",
                "ticks": 122880,
                "time": 3.333328,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999995,
                "durationTicks": 30720,
                "midi": 67,
                "name": "G4",
                "ticks": 153600,
                "time": 4.16666,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999995,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 184320,
                "time": 4.999992,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000004,
                "durationTicks": 30720,
                "midi": 69,
                "name": "A4",
                "ticks": 215040,
                "time": 5.833323999999999,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000004,
                "durationTicks": 30720,
                "midi": 67,
                "name": "G4",
                "ticks": 245760,
                "time": 6.666656,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000004,
                "durationTicks": 30720,
                "midi": 69,
                "name": "A4",
                "ticks": 276480,
                "time": 7.499988,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 307200,
                "time": 8.33332,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000004,
                "durationTicks": 30720,
                "midi": 74,
                "name": "D5",
                "ticks": 337920,
                "time": 9.166652,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.666663999999999,
                "durationTicks": 61440,
                "midi": 72,
                "name": "C5",
                "ticks": 368640,
                "time": 9.999984,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.6666640000000008,
                "durationTicks": 61440,
                "midi": 71,
                "name": "B4",
                "ticks": 430080,
                "time": 11.666647999999999,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.6666640000000008,
                "durationTicks": 61440,
                "midi": 64,
                "name": "E4",
                "ticks": 491520,
                "time": 13.333312,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 74,
                "name": "D5",
                "ticks": 552960,
                "time": 14.999976,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000022,
                "durationTicks": 30720,
                "midi": 72,
                "name": "C5",
                "ticks": 583680,
                "time": 15.833307999999999,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 614400,
                "time": 16.66664,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 72,
                "name": "C5",
                "ticks": 645120,
                "time": 17.499972,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 3.3333280000000016,
                "durationTicks": 122880,
                "midi": 71,
                "name": "B4",
                "ticks": 675840,
                "time": 18.333304,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 69,
                "name": "A4",
                "ticks": 798720,
                "time": 21.666632,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 829440,
                "time": 22.499964,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.7291655000000006,
                "durationTicks": 26880,
                "midi": 69,
                "name": "A4",
                "ticks": 860160,
                "time": 23.333295999999997,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 67,
                "name": "G4",
                "ticks": 890880,
                "time": 24.166628,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000022,
                "durationTicks": 30720,
                "midi": 64,
                "name": "E4",
                "ticks": 921600,
                "time": 24.999959999999998,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 63,
                "name": "D#4",
                "ticks": 952320,
                "time": 25.833292,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 64,
                "name": "E4",
                "ticks": 983040,
                "time": 26.666624,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000022,
                "durationTicks": 30720,
                "midi": 66,
                "name": "F#4",
                "ticks": 1013760,
                "time": 27.499955999999997,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.6666640000000008,
                "durationTicks": 61440,
                "midi": 67,
                "name": "G4",
                "ticks": 1044480,
                "time": 28.333288,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 66,
                "name": "F#4",
                "ticks": 1105920,
                "time": 29.999952,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 67,
                "name": "G4",
                "ticks": 1136640,
                "time": 30.833284,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 1167360,
                "time": 31.666615999999998,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000057,
                "durationTicks": 30720,
                "midi": 69,
                "name": "A4",
                "ticks": 1198080,
                "time": 32.499947999999996,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 67,
                "name": "G4",
                "ticks": 1228800,
                "time": 33.33328,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 69,
                "name": "A4",
                "ticks": 1259520,
                "time": 34.166612,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 1290240,
                "time": 34.999944,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 74,
                "name": "D5",
                "ticks": 1320960,
                "time": 35.833276,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.6666640000000044,
                "durationTicks": 61440,
                "midi": 72,
                "name": "C5",
                "ticks": 1351680,
                "time": 36.666608,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.6666639999999973,
                "durationTicks": 61440,
                "midi": 71,
                "name": "B4",
                "ticks": 1413120,
                "time": 38.333272,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 1.6666639999999973,
                "durationTicks": 61440,
                "midi": 64,
                "name": "E4",
                "ticks": 1474560,
                "time": 39.999936,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000057,
                "durationTicks": 30720,
                "midi": 74,
                "name": "D5",
                "ticks": 1536000,
                "time": 41.666599999999995,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 72,
                "name": "C5",
                "ticks": 1566720,
                "time": 42.499932,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 1597440,
                "time": 43.333264,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 72,
                "name": "C5",
                "ticks": 1628160,
                "time": 44.166596,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 3.3333280000000016,
                "durationTicks": 122880,
                "midi": 71,
                "name": "B4",
                "ticks": 1658880,
                "time": 44.999928,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 69,
                "name": "A4",
                "ticks": 1781760,
                "time": 48.333256,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 71,
                "name": "B4",
                "ticks": 1812480,
                "time": 49.166588,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.7291655000000006,
                "durationTicks": 26880,
                "midi": 69,
                "name": "A4",
                "ticks": 1843200,
                "time": 49.999919999999996,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333320000000057,
                "durationTicks": 30720,
                "midi": 67,
                "name": "G4",
                "ticks": 1873920,
                "time": 50.833251999999995,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 64,
                "name": "E4",
                "ticks": 1904640,
                "time": 51.666584,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 0.8333319999999986,
                "durationTicks": 30720,
                "midi": 63,
                "name": "D#4",
                "ticks": 1935360,
                "time": 52.499916,
                "velocity": 0.7874015748031497
            },
            {
                "duration": 3.4374944999999997,
                "durationTicks": 126720,
                "midi": 64,
                "name": "E4",
                "ticks": 1966080,
                "time": 53.333248,
                "velocity": 0.7874015748031497
            }
        ];

        p.cuesCompleted = [];

        p.setup = () => {
            
            p.canvas = p.createCanvas(p.canvasWidth, p.canvasHeight);
            p.background(255);

            p.song = p.loadSound(audio);
            p.song.onended(p.logCredits);
            for(let i = 0; i < p.notes.length; i++){
                p.song.addCue(p.notes[i].time, p.executeCue, (i + 1));
            }

            

        };

        p.draw = () => {

        };

        p.executeCue = (currentCue) => {
            
            if (!p.cuesCompleted.includes(currentCue)){
                p.cuesCompleted.push(currentCue);
                if (currentCue < 26){
                    p.clear();
                }
                p.drawSplatter((p.canvasWidth / 2) + currentCue, (p.canvasHeight / 2) + currentCue, 50 * currentCue, 10, p.notes.length - currentCue);
                p.drawSplatter(p.random(p.canvasWidth / 2), p.random(p.canvasHeight), 5 * currentCue, 10, currentCue);
                p.drawSplatter(p.random(p.canvasWidth / 2, p.canvasWidth), p.random(p.canvasHeight), 5 * currentCue, 10, currentCue);
            }
        }

        p.drawSplatter = (x, y, radius, level, opacity) => {
            let tt = p.random(128) * p.random(level) / p.random(6.0);
            p.fill(tt, p.random(255), p.random(255), opacity);
            p.stroke(tt, p.random(255), p.random(255));
            p.ellipse(x, y, radius * 2, radius * 2);
            if (level > 3) {
                level = level - 1;
                let num = parseInt(p.random(2, 5));
                for (let i = 0; i < num; i++) {
                    let a = p.random(0, p.TWO_PI);
                    let nx = x + p.cos(a) * 6.0 * level;
                    let ny = y + p.sin(a) * 6.0 * level;
                    p.drawSplatter(nx, ny, radius / 2, level, opacity);
                }
            }
        }

        p.mousePressed = () => {
            if (p.song.isPlaying()) {
                p.song.pause();
            } else {
                if (parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)){
                    p.reset();
                    
                }
                document.getElementById("play-icon").classList.add("fade-out");
                p.canvas.addClass('fade-in');
                p.song.play();
            }
        }

        p.creditsLogged = false;

        p.logCredits = () => {
            if (!p.creditsLogged) {
                p.creditsLogged = true;
                console.log(
                    'Music By: http://labcat.nz/',
                    '\n',
                    'Animation By: https://github.com/LABCAT',
                    '\n',
                    'Code Inspiration: https://www.openprocessing.org/sketch/429904'
                );
                p.song.stop();
            }
            
        }

        p.reset = () => {
            p.clear();
            p.cuesCompleted = [];
        };

        p.updateCanvasDimensions = () => {
            p.canvasWidth = window.innerWidth;
            p.canvasHeight = window.innerHeight;
            p.createCanvas(p.canvasWidth, p.canvasHeight);
            p.redraw();
        }

        if (window.attachEvent) {
            window.attachEvent(
                'onresize',
                function () {
                    p.updateCanvasDimensions();
                }
            );
        }
        else if (window.addEventListener) {
            window.addEventListener(
                'resize',
                function () {
                    p.updateCanvasDimensions();
                },
                true
            );
        }
        else {
            //The browser does not support Javascript event binding
        }
    };

    useEffect(() => {
        new p5(Sketch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <PlayIcon />
        </>
    );
};

export default P5Sketch;
