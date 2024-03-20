//@ts-ignore
import NetworkService from "./NetworkService";

const ApiService = {
    authenticateUser: async function (user: any) {
        return NetworkService.postResourceWithAuth("/v1/session/authenticate", user);
    },

    getUser: async function (userId: number) {
        return NetworkService.getResourceWithAuth(
            "/v1/session/" + userId

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
