import Axios from "axios";
import Cookies from "universal-cookie/es6";

class Client {

    static token(){
        //return new Cookies().get('accessToken');
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImlpZ3VfU0ZPTVc0X0l0QldSUVlaMmhHMEpyTSJ9.eyJhdWQiOiJ1cm46cGVvcGxlbW92ZXI6cmVzb3VyY2U6d2ViX3Blb3BsZW1vdmVyc3RhZ2V1aTpwcm9kIiwiaXNzIjoiaHR0cHM6Ly9jb3JwLnN0cy5mb3JkLmNvbS9hZGZzL3NlcnZpY2VzL3RydXN0IiwiaWF0IjoxNjQzMDAyMjEyLCJleHAiOjE2NDMwODg2MTIsIkNvbW1vbk5hbWUiOiJDU0hBVUdIMSIsInN1YiI6IkNTSEFVR0gxIiwiZ2l2ZW5uYW1lIjoiQ29ubm9yIiwic3VybmFtZSI6IlNoYXVnaG5lc3N5IiwiZW1haWxhZGRyZXNzIjoiY3NoYXVnaDFAZm9yZC5jb20iLCJhcHB0eXBlIjoiUHVibGljIiwiYXBwaWQiOiJ1cm46cGVvcGxlbW92ZXI6Y2xpZW50aWQ6d2ViX3Blb3BsZW1vdmVyc3RhZ2V1aTpwcm9kIiwiYXV0aG1ldGhvZCI6Imh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9hdXRoZW50aWNhdGlvbm1ldGhvZC93aW5kb3dzIiwiYXV0aF90aW1lIjoiMjAyMi0wMS0yNFQwNTozMzoxMC4xNzRaIiwidmVyIjoiMS4wIn0.ERG8kOinzo-4J6hTWbx7zDh-eZaFBDgc7QJOw9iGuOGwNZtvWSQrC6cubpbdypOUruI2UWbf-sOBpbGWTA8q5srymY6wBIclFc0gfXBr5un34E_lZ4sNwDvsbnc-lBCXxh8Oqsw9XL3RhOT-rqiGFSwNzfBXW2CvPUK3waKRd2v9O_PoFNWLCjNhHaXzR1g62i1t0dQG7zLJC1UGpdiWvCvki-G3-gtZYDJW0Q2q-VX-A0cWVelFZodkb0_UIObLukKnzYqsmzFrRD3ythX54rt_0vSihK3AOMUG-pef4TR-_vVDIyk0dpCaYQhUwaPKDFT-1l1aFHLCAITAWYEu-Q';
    }

    static headers(){
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Client.token()}`,
        };
    }

    static async getAssignmentsV2ForSpaceAndPerson(spaceUuid, personId) {
        const url = `/api/v2/spaces/${spaceUuid}/person/${personId}/assignments`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Client.token()}`,
        };
        return Axios.get(url, {headers});
    }

    static async getPeopleInSpace(spaceUuid){
        const url = `/api/spaces/`+spaceUuid+`/people`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Client.token()}`,
        };
        return Axios.get(url, {headers});
    }
}

export default Client;