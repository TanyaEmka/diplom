export type TreeType = {
    id: number,
    veight: number,
    x: number,
    y: number,
    wood: string,
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

export type StatisticTreeType = {
    count: number,
    wood: string,
}

export type StatisticType = {
    id: number,
    polygon_id: number,
    tree_count: number,
    trees: Array<StatisticTreeType>,
}

export type SigninType = {
    name: string,
    password: string,
}

export type SigninResponse = {
    status: number,
    body: {
        access_token: string,
    }
}

export type SignupType = {
    name: string,
    password: string,
}