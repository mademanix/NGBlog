import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.sass']
})
export class SplashscreenComponent implements OnInit {

    @ViewChild('canvas', {static: true})
    canvas: ElementRef<HTMLCanvasElement>;
    ctx: CanvasRenderingContext2D;
    private canvasWidth: number = 450;
    private canvasHeight: number = 450;

    constructor() {
    }

    ngOnInit() {

        // this.canvas.nativeElement.width = this.canvasWidth;
        // this.canvas.nativeElement.height = this.canvasHeight;
        // this.ctx = this.canvas.nativeElement.getContext('2d');
        // this.ctx.beginPath();
        // this.ctx.lineWidth = 10;
        //
        // this.ctx.arc(this.canvasHeight / 6 + 40, this.canvasWidth / 6, 25, 0, 2 * Math.PI);
        //
        // this.ctx.moveTo(this.canvasHeight / 6 + 40, this.canvasWidth / 6);
        // this.ctx.lineTo(this.canvasHeight / 6 + 40, this.canvasWidth - this.canvasWidth / 6);
        // this.ctx.lineTo(this.canvasHeight - this.canvasHeight / 6 - 10, this.canvasWidth / 6);
        // this.ctx.lineTo(this.canvasHeight - this.canvasHeight / 6 - 10, this.canvasWidth - this.canvasWidth / 6);
        // this.ctx.lineTo(this.canvasHeight / 2, this.canvasWidth / 6);
        // this.ctx.lineTo(this.canvasHeight / 2, this.canvasWidth - this.canvasWidth / 6);
        // this.ctx.save();
        //
        // this.ctx.font = '50px sans';
        // this.ctx.translate(40, 350);
        // this.ctx.rotate(-0.5 * Math.PI);
        // this.ctx.fillText('[ rttd ]', 50, 50);
        // this.ctx.stroke();


    }

    // private addJitteryBezier(fromX: number, fromY: number, toX: number, toY: number) {
    //     const diffX = toX - fromX;
    //     const diffY = toY - fromY;
    //
    //     const neg = Math.random() * diffY / 5; // so the x value can go positive or negative from the typical
    //
    //
    //     this.ctx.bezierCurveTo(
    //         -neg + fromX + 1.1 * 45 + ((Math.random() % 2) > .5 ? -1 : 1) * 2, fromY + .3 * diffY,
    //         -neg + fromX + 1.1 * 45 + ((Math.random() % 2) > .5 ? -1 : 1) * 2, fromY + .6 * diffY,
    //         toX, toY
    //     );
    // }
    //
    // private drawSkewLine(fromX: number, fromY: number, toX: number, toY: number, step: number) {
    //     let i = 0;
    //     while (i < fromY) {
    //         console.log(`i = ${i}`);
    //         console.log(`toY + i = ${toY + i}`);
    //         this.addJitteryBezier(fromX, i, toX, toY + i);
    //         i += step;
    //     }
    // }
}
