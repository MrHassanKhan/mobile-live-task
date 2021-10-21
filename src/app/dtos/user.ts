export class User {
    public id: number|null = null;
    public name: string|null = null;
    public age: number|null = null;
    public gender: Gender|null = null;
}

export enum Gender {
    Male="Male", Female="Female", None="None"
}