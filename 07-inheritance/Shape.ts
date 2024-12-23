export class Shape{
    
    constructor(private _name: string,
                private _area: number) {}
    
    public get name(): string {
        return this._name;
    }
    
    public set name(name: string) {
        this._name = name;
    }

    public get area(): number {
        return this._area;
    }

    public set area(area: number) {
        this._area = area;
    }

    public getInfo(): string {
        return `name={${this._name}}, area={${this._area}}`
    }

}