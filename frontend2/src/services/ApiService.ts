//@ts-ignore
import NetworkService from "./NetworkService";

const ApiService = {
    createGroup: async function (groupObject: any) {
        return NetworkService.postResourceWithAuth("/v1/groups/", groupObject);
    },

    updateGroup: async function (groupId: string, groupObject: any) {
        return NetworkService.putResourceWithAuth(
            "/v1/groups/" + groupId,
            groupObject
        );
    },

    //Includes groupId and public address
    createMember: async function (id: string, member: any) {
        return NetworkService.postResourceWithAuth(
            `/v1/groups/${id}/members`,
            member
        );
    },

    toggleAdminStatus: async function (groupId: string, userId: string) {
        return NetworkService.putResourceWithAuth(
            `/v1/groups/toggle/${groupId}/${userId}`, {}
        );
    },

    readGroup: async function (groupId: string) {
        return NetworkService.getResourceWithAuth("/v1/groups/" + groupId);
    },


};

export default ApiService;
