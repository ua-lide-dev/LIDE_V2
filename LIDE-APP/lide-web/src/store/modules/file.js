import FileService from "../../services/file-service";

/* ------------------------- FILE STATE ------------------------- */
const state = () => ({});

/* ------------------------- FILE GETTERS ------------------------- */
const getters = {}

/* ------------------------- FILE ACTIONS ------------------------- */
const actions = {

    async create({ dispatch }, { projectid, filename, extension }) {
        return FileService.create(projectid, filename, extension)
            .then(res => {
                return res.json().then(file => {
                    dispatch("project/fetchProjects", null, { root: true }); 
                    return file._id; 
                });
            });   
    },

    async rename({ dispatch }, { fileid, newfilename, extension }) {
        await FileService.rename(fileid, newfilename, extension)
            .then(async () => {
                let tab = await dispatch("tab/getTab", fileid, { root: true });
                dispatch("tab/updateTabFileName", { tab: tab, newfilename: newfilename }, { root: true });
                dispatch("project/fetchProjects", null, { root: true });
            });
    },

    async remove({ dispatch }, fileid) {
        FileService.remove(fileid).then(async () => {
            let tab = await dispatch("tab/getTab", fileid, { root: true });
            dispatch("tab/closeTab", tab, { root: true });
            dispatch("project/fetchProjects", null, { root: true });
        })
    },
}

/* ------------------------- FILE MUTATIONS ------------------------- */
const mutations = {
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
