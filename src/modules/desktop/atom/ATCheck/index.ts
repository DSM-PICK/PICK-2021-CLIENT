import { atom } from "recoil";

export const CDateValue = atom({
    key: "cvalue",
    default: ""
})

export const CModal = atom({
    key: "cmodal",
    default: false
})

export const studentFilter = atom({
    key: "studentFilter",
    default: '전체'    
})

export const statusFilter = atom({
    key: "statusFilter",
    default: '전체'
})