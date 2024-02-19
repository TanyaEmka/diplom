export type TreeType = {
    id: number,
    veight: number,
    x: number,
    y: number,
    wood_id: number,
    name: string,
}

export type WoodType = {
    id: number,
    wood_type: string,
}

export type PointType = [number, number];

export type PolygonType = {
    id: number,
    points: Array<PointType>,
    name: string,
}

export type PolygonTreesType = {
    trees: Array<TreeType>,
}

export type SigninType = {
    login: string,
    password: string,
}

export type SignupType = {
    login: string,
    password: string,
}