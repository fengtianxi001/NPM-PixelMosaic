interface optionsProp {
    src: string;
    nw: number;
    nh: number;
}
declare class Mosaic {
    private nw;
    private nh;
    private canvas;
    private ctx;
    private image;
    private uw;
    private uh;
    private width;
    private height;
    constructor(options: optionsProp);
    onload(): void;
    mosaic(): void;
    fetchStyle(pos: [number, number, number, number]): string;
}
export default Mosaic;
