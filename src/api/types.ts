type TreeType = {
    id: number,
    veight: number,
    x: number,
    y: number,
    wood_id: number,
}

type WoodType = {
    id: number,
    wood_type: string,
}

type PointType = {
    point: [number, number],
}

type PolygonType = {
    id: number,
    points: Array<PointType>,
}

type PolygonTreesType = {
    trees: Array<TreeType>,
}

type SigninType = {
    login: string,
    password: string,
}

type SignupType = {
    login: string,
    password: string,
}