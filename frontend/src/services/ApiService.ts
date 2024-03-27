//@ts-ignore
import NetworkService from "./NetworkService";

const ApiService = {
    authenticateUser: async function (user: any) {
        return NetworkService.postResourceWithAuth("/v1/session/authenticate", user);
    },

    getUser: async function (userId: number) {
        return NetworkService.getResourceWithAuth(
            "/v1/user/" + userId

        );
    },
    getAllUsers: async function () {
        return NetworkService.getResourceWithAuth(
            "/v1/user/"
        );
    },

    updateUser: async function (userId: number, userObject: any) {
        return NetworkService.putResourceWithAuth(
            "/v1/user/" + userId, userObject

        );
    },

    createOrganization: async function (organization: any) {
        return NetworkService.postResourceWithAuth("/v1/organization", organization);
    },

    getAllOrganizations: async function () {
        return NetworkService.getResourceWithAuth("/v1/organization");
    },

    getOrganizationById: async function (organizationId: any) {
        return NetworkService.getResourceWithAuth("/v1/organization/" + organizationId);
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
