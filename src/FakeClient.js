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

    static async getAssignmentsV2ForSpaceAndProduct(spaceUuid, productId){
        let assignmentsForProduct;
        switch(productId){
            case 16:
                assignmentsForProduct = [
                    {
                        "person": {
                            "id": 40,
                            "name": "Erin Stratos",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 16,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 46,
                            "name": "Sharon Lee",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 16,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 49,
                            "name": "Mark Quint",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "Maybe be out starting 12/13",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 16,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 52,
                            "name": "Jung koo Kang",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 16,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 58,
                            "name": "Vianney Willot",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "PM Pairing",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 16,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    }
                ]
                break;
            case 37:
                assignmentsForProduct = [
                    {
                        "person": {
                            "id": 40,
                            "name": "Erin Stratos",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-06",
                        "endDate": "2020-07-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 40,
                            "name": "Erin Stratos",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-30",
                        "endDate": "2020-08-10",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 40,
                            "name": "Erin Stratos",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-10-05",
                        "endDate": "2020-10-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 49,
                            "name": "Mark Quint",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "Maybe be out starting 12/13",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-06",
                        "endDate": "2020-08-10",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 49,
                            "name": "Mark Quint",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "Maybe be out starting 12/13",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-03-08",
                        "endDate": "2021-03-11",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 49,
                            "name": "Mark Quint",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "Maybe be out starting 12/13",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-24",
                        "endDate": "2021-07-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 52,
                            "name": "Jung koo Kang",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-06",
                        "endDate": "2020-08-10",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 52,
                            "name": "Jung koo Kang",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-11-19",
                        "endDate": "2020-11-30",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 58,
                            "name": "Vianney Willot",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "PM Pairing",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-06",
                        "endDate": "2020-07-27",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 61,
                            "name": "Jodee Jernigan",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-06",
                        "endDate": "2020-07-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 61,
                            "name": "Jodee Jernigan",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-02-01",
                        "endDate": "2021-02-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 64,
                            "name": "Michel Atieh",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-06",
                        "endDate": "2020-07-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 67,
                            "name": "John Cherney",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-11-08",
                        "endDate": "2021-11-30",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 70,
                            "name": "Max Wilkinson",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-13",
                        "endDate": "2020-08-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 85,
                            "name": "Kaitie Shubnell",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-06-22",
                        "endDate": "2020-06-29",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 85,
                            "name": "Kaitie Shubnell",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-17",
                        "endDate": "2020-08-24",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 85,
                            "name": "Kaitie Shubnell",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-10-05",
                        "endDate": "2020-10-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 85,
                            "name": "Kaitie Shubnell",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-24",
                        "endDate": "2021-07-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 88,
                            "name": "Molly O'Riordon",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 91,
                            "name": "Jack van Hoecke",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 94,
                            "name": "Adam Walters",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 94,
                            "name": "Adam Walters",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-08-12",
                        "endDate": "2021-09-20",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 97,
                            "name": "Ashley Clifton",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 97,
                            "name": "Ashley Clifton",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-02-01",
                        "endDate": "2021-02-15",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 97,
                            "name": "Ashley Clifton",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-10-25",
                        "endDate": "2021-11-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 97,
                            "name": "Ashley Clifton",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2022-01-17",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 100,
                            "name": "Connor Shaughnessy",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 100,
                            "name": "Connor Shaughnessy",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-11-30",
                        "endDate": "2020-12-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 100,
                            "name": "Connor Shaughnessy",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2022-01-24",
                        "endDate": "2022-02-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 103,
                            "name": "Muneeb Hameed",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Leave after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-24",
                        "endDate": "2021-06-25",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 106,
                            "name": "Josh Gilbert",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "\nAlso doing TruckHub",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-20",
                        "endDate": "2020-07-27",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 109,
                            "name": "Jenny Tiedemann",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 37,
                        "startDate": "2021-03-29",
                        "endDate": "2021-04-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 115,
                            "name": "Kari Schmitt",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-10-05",
                        "endDate": "2020-10-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 115,
                            "name": "Kari Schmitt",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-03-08",
                        "endDate": "2021-03-15",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 115,
                            "name": "Kari Schmitt",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 37,
                        "startDate": "2022-01-17",
                        "endDate": "2022-02-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 118,
                            "name": "Lee Lazarecky",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-20",
                        "endDate": "2020-08-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 118,
                            "name": "Lee Lazarecky",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-02-01",
                        "endDate": "2021-03-08",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 118,
                            "name": "Lee Lazarecky",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-14",
                        "endDate": "2021-07-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 121,
                            "name": "Michael Rygiel",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-01-03"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-02-01",
                        "endDate": "2021-02-04",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 124,
                            "name": "Nick Reuter",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-10-11",
                        "endDate": "2021-10-20",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 127,
                            "name": "Tracey Lo",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-02-22",
                        "endDate": "2021-03-29",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 130,
                            "name": "Andrew Cobb",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-07-19",
                        "endDate": "2021-08-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 130,
                            "name": "Andrew Cobb",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-08-30",
                        "endDate": "2021-09-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 133,
                            "name": "Christopher Atkinson",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-30",
                        "endDate": "2020-08-10",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 136,
                            "name": "Justin Gasta",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-27",
                        "endDate": "2020-08-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 136,
                            "name": "Justin Gasta",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-10-05",
                        "endDate": "2020-10-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 139,
                            "name": "Liz Schemanski",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-20",
                        "endDate": "2020-09-28",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 142,
                            "name": "Kevin Sawyer",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "Out for year on 12/13",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2021-12-13"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-24",
                        "endDate": "2020-09-28",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 145,
                            "name": "Chris Boyer",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-31",
                        "endDate": "2020-09-08",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 148,
                            "name": "Manjusha Janga",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-31",
                        "endDate": "2020-09-08",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 151,
                            "name": "Matt Schultz",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-27",
                        "endDate": "2020-07-30",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 151,
                            "name": "Matt Schultz",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-10",
                        "endDate": "2020-09-08",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 151,
                            "name": "Matt Schultz",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-24",
                        "endDate": "2021-07-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 154,
                            "name": "Tanmay Satam",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "Out Nov 12, 15, 22-24, 29, Dec 6, 13, 20-23",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 37,
                        "startDate": "2020-07-27",
                        "endDate": "2020-07-30",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 154,
                            "name": "Tanmay Satam",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "Out Nov 12, 15, 22-24, 29, Dec 6, 13, 20-23",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-10",
                        "endDate": "2020-11-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 160,
                            "name": "Lu Tian",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-04-19",
                        "endDate": "2021-05-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 175,
                            "name": "Hirava Anaghan",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-03-29",
                        "endDate": "2021-05-05",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 178,
                            "name": "Stephen Graham",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-02-01",
                        "endDate": "2021-03-15",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 178,
                            "name": "Stephen Graham",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 37,
                        "startDate": "2021-11-29",
                        "endDate": "2021-12-16",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 178,
                            "name": "Stephen Graham",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2022-01-03",
                        "endDate": "2022-01-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 181,
                            "name": "Chris Ings",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-06-29",
                        "endDate": "2020-07-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 181,
                            "name": "Chris Ings",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-07-05",
                        "endDate": "2021-07-26",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 184,
                            "name": "Chithra Ramadoss",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-20",
                        "endDate": "2020-08-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 184,
                            "name": "Chithra Ramadoss",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-14",
                        "endDate": "2021-07-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 187,
                            "name": "Jon Bezak",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-04-01",
                        "endDate": "2021-04-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 190,
                            "name": "Paulette Avolio",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-20",
                        "endDate": "2020-08-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 190,
                            "name": "Paulette Avolio",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-10-05",
                        "endDate": "2020-10-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 193,
                            "name": "Andrew Crouch",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-02-01"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-20",
                        "endDate": "2020-08-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 193,
                            "name": "Andrew Crouch",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-02-01"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-20",
                        "endDate": "2020-08-24",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 193,
                            "name": "Andrew Crouch",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-02-01"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-03-29",
                        "endDate": "2021-05-10",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 196,
                            "name": "Chris Dorman",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-20",
                        "endDate": "2020-08-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 196,
                            "name": "Chris Dorman",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-10-05",
                        "endDate": "2020-10-19",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 199,
                            "name": "Matt Trueblood",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-03-08",
                        "endDate": "2021-03-15",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 202,
                            "name": "Paul Candela",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "Partial Schedule ; mon and friday off",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-07-20",
                        "endDate": "2020-08-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 202,
                            "name": "Paul Candela",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "Partial Schedule ; mon and friday off",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-03-18",
                        "endDate": "2021-04-26",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 202,
                            "name": "Paul Candela",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "Partial Schedule ; mon and friday off",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-11-08",
                        "endDate": "2021-12-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 205,
                            "name": "Sara Abdulla",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2021-11-15"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-04-06",
                        "endDate": "2021-05-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 214,
                            "name": "Elise Griffiths",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2020-08-20",
                        "endDate": "2020-08-24",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 214,
                            "name": "Elise Griffiths",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-02-01",
                        "endDate": "2021-02-15",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 214,
                            "name": "Elise Griffiths",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-28",
                        "endDate": "2021-07-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 13252,
                            "name": "Lukas Marinovic",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Intern",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2021-08-13"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-05-10",
                        "endDate": "2021-05-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14932,
                            "name": "Alexander Wojtala",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-01-12"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-06-14",
                        "endDate": "2021-07-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14932,
                            "name": "Alexander Wojtala",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-01-12"
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-10-11",
                        "endDate": "2021-11-08",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 15898,
                            "name": "Demery Gijsbers",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-07-26",
                        "endDate": "2021-08-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 16618,
                            "name": "Dan Maser",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": true,
                            "newPersonDate": "2021-09-27",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-09-27",
                        "endDate": "2021-10-04",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 19213,
                            "name": "Nick Kilpatrick",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": true,
                            "newPersonDate": "2021-11-29",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 37,
                        "startDate": "2021-11-29",
                        "endDate": "2021-12-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    }
                ]
                break;
            case 43:
                assignmentsForProduct = [
                    {
                        "person": {
                            "id": 46,
                            "name": "Sharon Lee",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-07-06",
                        "endDate": "2021-02-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 58,
                            "name": "Vianney Willot",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "PM Pairing",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-07-27",
                        "endDate": "2021-08-02",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 58,
                            "name": "Vianney Willot",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "PM Pairing",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-08-09",
                        "endDate": "2021-08-16",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 61,
                            "name": "Jodee Jernigan",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-02-09",
                        "endDate": "2021-11-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 64,
                            "name": "Michel Atieh",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-03-15",
                        "endDate": "2021-09-20",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 67,
                            "name": "John Cherney",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-02-01",
                        "endDate": "2021-11-08",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 70,
                            "name": "Max Wilkinson",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-02-01",
                        "endDate": "2021-03-15",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 73,
                            "name": "Natalia Kumar",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-01-18",
                        "endDate": "2021-03-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 97,
                            "name": "Ashley Clifton",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-07-20",
                        "endDate": "2021-02-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 100,
                            "name": "Connor Shaughnessy",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 43,
                        "startDate": "2021-08-09",
                        "endDate": "2022-01-24",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 109,
                            "name": "Jenny Tiedemann",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-06-22",
                        "endDate": "2020-08-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 115,
                            "name": "Kari Schmitt",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-06-22",
                        "endDate": "2020-09-14",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 118,
                            "name": "Lee Lazarecky",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-20",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 121,
                            "name": "Michael Rygiel",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-01-03"
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-06-22",
                        "endDate": "2020-12-07",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 124,
                            "name": "Nick Reuter",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-06-22",
                        "endDate": "2020-10-19",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 127,
                            "name": "Tracey Lo",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-06-22",
                        "endDate": "2020-07-27",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 133,
                            "name": "Christopher Atkinson",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-01-04",
                        "endDate": "2021-05-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 142,
                            "name": "Kevin Sawyer",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "Out for year on 12/13",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2021-12-13"
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-11-01",
                        "endDate": "2021-12-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 178,
                            "name": "Stephen Graham",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-03-15",
                        "endDate": "2021-08-30",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 193,
                            "name": "Andrew Crouch",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-02-01"
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-05-10",
                        "endDate": "2021-06-28",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 196,
                            "name": "Chris Dorman",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-10-19",
                        "endDate": "2020-12-07",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 196,
                            "name": "Chris Dorman",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-01-04",
                        "endDate": "2021-03-15",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 205,
                            "name": "Sara Abdulla",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2021-11-15"
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-07-06",
                        "endDate": "2021-04-06",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 214,
                            "name": "Elise Griffiths",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-08-24",
                        "endDate": "2021-02-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 4528,
                            "name": "John Handy",
                            "spaceRole": {
                                "id": 847,
                                "name": "zProduct Owner",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 19,
                                    "color": "#FFEAAA"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2020-10-26",
                        "endDate": "2022-01-24",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 8359,
                            "name": "Kristin Georvassilis",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-01-04",
                        "endDate": "2021-03-01",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 13252,
                            "name": "Lukas Marinovic",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Intern",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2021-08-13"
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-05-17",
                        "endDate": "2021-08-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14152,
                            "name": "Naseem Bokhari",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-05-24",
                        "endDate": "2021-08-02",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14152,
                            "name": "Naseem Bokhari",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-11-08",
                        "endDate": "2021-12-13",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14152,
                            "name": "Naseem Bokhari",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2022-01-03",
                        "endDate": "2022-01-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14932,
                            "name": "Alexander Wojtala",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-01-12"
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-01-04",
                        "endDate": "2021-03-08",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 15898,
                            "name": "Demery Gijsbers",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-08-09",
                        "endDate": "2021-10-11",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 15898,
                            "name": "Demery Gijsbers",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-10-20",
                        "endDate": "2021-12-23",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 15898,
                            "name": "Demery Gijsbers",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2022-01-03",
                        "endDate": "2022-01-10",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 16627,
                            "name": "John Rozan",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": true,
                            "newPersonDate": "2021-10-04",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-11-15",
                        "endDate": "2022-01-24",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 19720,
                            "name": "Allie Kudlinski",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": true,
                            "newPersonDate": "2021-12-06",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 43,
                        "startDate": "2021-12-06",
                        "endDate": "2022-01-17",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    }
                ]
                break;
            case 4501:
                assignmentsForProduct = [
                    {
                        "person": {
                            "id": 40,
                            "name": "Erin Stratos",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 46,
                            "name": "Sharon Lee",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-05-03",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 52,
                            "name": "Jung koo Kang",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-02-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 58,
                            "name": "Vianney Willot",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "PM Pairing",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-08-16",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 70,
                            "name": "Max Wilkinson",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-18",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 73,
                            "name": "Natalia Kumar",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 91,
                            "name": "Jack van Hoecke",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-05-17",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 106,
                            "name": "Josh Gilbert",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "\nAlso doing TruckHub",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 136,
                            "name": "Justin Gasta",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-02-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 139,
                            "name": "Liz Schemanski",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-02-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 145,
                            "name": "Chris Boyer",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-02-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 160,
                            "name": "Lu Tian",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-05-03",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 166,
                            "name": "Tyler Maklebust",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-02-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 169,
                            "name": "Kaitlyn Docherty",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-08-18",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 172,
                            "name": "Mark Rust",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-02-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 184,
                            "name": "Chithra Ramadoss",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-08-16",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 196,
                            "name": "Chris Dorman",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-18",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 1969,
                            "name": "Aksel Thomas",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-02-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 4507,
                            "name": "Peter Nikolajevs",
                            "spaceRole": {
                                "id": 847,
                                "name": "zProduct Owner",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 19,
                                    "color": "#FFEAAA"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 4510,
                            "name": "Charlie Sutton",
                            "spaceRole": {
                                "id": 847,
                                "name": "zProduct Owner",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 19,
                                    "color": "#FFEAAA"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 4519,
                            "name": "Kyle Green",
                            "spaceRole": {
                                "id": 847,
                                "name": "zProduct Owner",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 19,
                                    "color": "#FFEAAA"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 4531,
                            "name": "Tom Woods",
                            "spaceRole": {
                                "id": 847,
                                "name": "zProduct Owner",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 19,
                                    "color": "#FFEAAA"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 4540,
                            "name": "Brian De Guzman",
                            "spaceRole": {
                                "id": 847,
                                "name": "zProduct Owner",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 19,
                                    "color": "#FFEAAA"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-01-04",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 9325,
                            "name": "Vanessa Roe",
                            "spaceRole": {
                                "id": 1636,
                                "name": "Product Designer - External",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 13,
                                    "color": "#FCBAE9"
                                }
                            },
                            "tags": [],
                            "notes": "CX - IT",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 9580,
                            "name": "Allison Chen",
                            "spaceRole": {
                                "id": 1660,
                                "name": "Product Manager - External",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 22,
                                    "color": "#C9E9B0"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-03-08",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 11059,
                            "name": "Jasmine Mims",
                            "spaceRole": {
                                "id": 1636,
                                "name": "Product Designer - External",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 13,
                                    "color": "#FCBAE9"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-07-01",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 11113,
                            "name": "Ariane Anusbigian",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-08-02",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 13255,
                            "name": "Austin Trapp",
                            "spaceRole": {
                                "id": 2233,
                                "name": "Software Engineer - External",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 4,
                                    "color": "#81C0FA"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-06-14",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14926,
                            "name": "Catherine Steigerwald",
                            "spaceRole": {
                                "id": 2530,
                                "name": "Revolutionaries",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 16,
                                    "color": "#FFD7B3"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-06-28",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14923,
                            "name": "Nathan Munk",
                            "spaceRole": {
                                "id": 2530,
                                "name": "Revolutionaries",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 16,
                                    "color": "#FFD7B3"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-06-28",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14563,
                            "name": "David Wang",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": true,
                            "newPersonDate": "2021-07-21",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-07-19",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 4534,
                            "name": "Mathew Williams",
                            "spaceRole": {
                                "id": 847,
                                "name": "zProduct Owner",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 19,
                                    "color": "#FFEAAA"
                                }
                            },
                            "tags": [],
                            "notes": "mwill731",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-06-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 9532,
                            "name": "Samantha Yu",
                            "spaceRole": {
                                "id": 1636,
                                "name": "Product Designer - External",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 13,
                                    "color": "#FCBAE9"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 4501,
                        "startDate": "2021-06-24",
                        "endDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    }
                ]
                break;
            case 6655:
                assignmentsForProduct = [
                    {
                        "person": {
                            "id": 58,
                            "name": "Vianney Willot",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "PM Pairing",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 6655,
                        "startDate": "2021-08-02",
                        "endDate": "2021-08-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 61,
                            "name": "Jodee Jernigan",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 67,
                            "name": "John Cherney",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-16",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 76,
                            "name": "Renee Liken",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "PO and PM\nLast working day of year 12/17/21",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-17",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 82,
                            "name": "Megan Majewski",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-01-24"
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-07-21",
                        "endDate": "2021-08-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 85,
                            "name": "Kaitie Shubnell",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-11-22",
                        "endDate": "2021-11-29",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 85,
                            "name": "Kaitie Shubnell",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-13",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 88,
                            "name": "Molly O'Riordon",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-17",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 94,
                            "name": "Adam Walters",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-08-05",
                        "endDate": "2021-08-12",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 97,
                            "name": "Ashley Clifton",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-13",
                        "endDate": "2021-12-20",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 100,
                            "name": "Connor Shaughnessy",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 6655,
                        "startDate": "2021-08-02",
                        "endDate": "2021-08-09",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 103,
                            "name": "Muneeb Hameed",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Leave after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-21",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 109,
                            "name": "Jenny Tiedemann",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 115,
                            "name": "Kari Schmitt",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-15",
                        "endDate": "2021-12-16",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 115,
                            "name": "Kari Schmitt",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 130,
                            "name": "Andrew Cobb",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 133,
                            "name": "Christopher Atkinson",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 151,
                            "name": "Matt Schultz",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 154,
                            "name": "Tanmay Satam",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "Out Nov 12, 15, 22-24, 29, Dec 6, 13, 20-23",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 157,
                            "name": "Arielle Nabors",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 178,
                            "name": "Stephen Graham",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 6655,
                        "startDate": "2021-12-16",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 193,
                            "name": "Andrew Crouch",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": "2022-02-01"
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-17",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 202,
                            "name": "Paul Candela",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "Partial Schedule ; mon and friday off",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": true,
                        "productId": 6655,
                        "startDate": "2021-09-13",
                        "endDate": "2021-09-30",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 11056,
                            "name": "Sam Bolin",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-16",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 14152,
                            "name": "Naseem Bokhari",
                            "spaceRole": {
                                "id": 16,
                                "name": "Software Engineer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 7,
                                    "color": "#A7E9F2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-13",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 13846,
                            "name": "Neil Kochhar",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-13",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 13849,
                            "name": "Leah Wilkinson",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": null,
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-20",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 15898,
                            "name": "Demery Gijsbers",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-10-11",
                        "endDate": "2021-10-20",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 15898,
                            "name": "Demery Gijsbers",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "Potential Mobile Service after reinception",
                            "newPerson": false,
                            "newPersonDate": null,
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-23",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 16618,
                            "name": "Dan Maser",
                            "spaceRole": {
                                "id": 7,
                                "name": "Product Designer",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 10,
                                    "color": "#DBB5FF"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": true,
                            "newPersonDate": "2021-09-27",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-21",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    },
                    {
                        "person": {
                            "id": 16789,
                            "name": "Mushir Khwaja",
                            "spaceRole": {
                                "id": 10,
                                "name": "Product Manager",
                                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                                "color": {
                                    "id": 1,
                                    "color": "#83DDC2"
                                }
                            },
                            "tags": [],
                            "notes": "",
                            "newPerson": true,
                            "newPersonDate": "2021-10-04",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "customField1": "",
                            "archiveDate": null
                        },
                        "placeholder": false,
                        "productId": 6655,
                        "startDate": "2021-12-15",
                        "endDate": "2022-01-03",
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                    }
                ]
                break;
        }
        return assignmentsForProduct;
    }

    static async getAssignmentsV2ForSpaceAndPerson(spaceUuid, personId) {
        let vianneyAssignments = [
                {
                    "person": {
                        "id": 58,
                        "name": "Vianney Willot",
                        "spaceRole": {
                            "id": 16,
                            "name": "Software Engineer",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "color": {
                                "id": 7,
                                "color": "#A7E9F2"
                            }
                        },
                        "tags": [],
                        "notes": "PM Pairing",
                        "newPerson": false,
                        "newPersonDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                        "customField1": null,
                        "archiveDate": null
                    },
                    "placeholder": false,
                    "productId": 16,
                    "startDate": "2020-06-22",
                    "endDate": "2020-07-06",
                    "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                },
                {
                    "person": {
                        "id": 58,
                        "name": "Vianney Willot",
                        "spaceRole": {
                            "id": 16,
                            "name": "Software Engineer",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "color": {
                                "id": 7,
                                "color": "#A7E9F2"
                            }
                        },
                        "tags": [],
                        "notes": "PM Pairing",
                        "newPerson": false,
                        "newPersonDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                        "customField1": null,
                        "archiveDate": null
                    },
                    "placeholder": false,
                    "productId": 37,
                    "startDate": "2020-07-06",
                    "endDate": "2020-07-27",
                    "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                },
                {
                    "person": {
                        "id": 58,
                        "name": "Vianney Willot",
                        "spaceRole": {
                            "id": 16,
                            "name": "Software Engineer",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "color": {
                                "id": 7,
                                "color": "#A7E9F2"
                            }
                        },
                        "tags": [],
                        "notes": "PM Pairing",
                        "newPerson": false,
                        "newPersonDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                        "customField1": null,
                        "archiveDate": null
                    },
                    "placeholder": false,
                    "productId": 43,
                    "startDate": "2020-07-27",
                    "endDate": "2021-08-02",
                    "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                },
                {
                    "person": {
                        "id": 58,
                        "name": "Vianney Willot",
                        "spaceRole": {
                            "id": 16,
                            "name": "Software Engineer",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "color": {
                                "id": 7,
                                "color": "#A7E9F2"
                            }
                        },
                        "tags": [],
                        "notes": "PM Pairing",
                        "newPerson": false,
                        "newPersonDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                        "customField1": null,
                        "archiveDate": null
                    },
                    "placeholder": true,
                    "productId": 6655,
                    "startDate": "2021-08-02",
                    "endDate": "2021-08-09",
                    "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                },
                {
                    "person": {
                        "id": 58,
                        "name": "Vianney Willot",
                        "spaceRole": {
                            "id": 16,
                            "name": "Software Engineer",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "color": {
                                "id": 7,
                                "color": "#A7E9F2"
                            }
                        },
                        "tags": [],
                        "notes": "PM Pairing",
                        "newPerson": false,
                        "newPersonDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                        "customField1": null,
                        "archiveDate": null
                    },
                    "placeholder": false,
                    "productId": 43,
                    "startDate": "2021-08-09",
                    "endDate": "2021-08-16",
                    "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                },
                {
                    "person": {
                        "id": 58,
                        "name": "Vianney Willot",
                        "spaceRole": {
                            "id": 16,
                            "name": "Software Engineer",
                            "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                            "color": {
                                "id": 7,
                                "color": "#A7E9F2"
                            }
                        },
                        "tags": [],
                        "notes": "PM Pairing",
                        "newPerson": false,
                        "newPersonDate": null,
                        "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                        "customField1": null,
                        "archiveDate": null
                    },
                    "placeholder": false,
                    "productId": 4501,
                    "startDate": "2021-08-16",
                    "endDate": null,
                    "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670"
                }
            ];
        return Promise.resolve({data: vianneyAssignments});
    }

    static async getPeopleInSpace(spaceUuid){
        const vianneyPerson = {
                "id": 58,
                "name": "Vianney Willot",
                "spaceRole": {
                    "id": 16,
                    "name": "Software Engineer",
                    "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                    "color": {
                        "id": 7,
                        "color": "#A7E9F2"
                    }
                },
                "tags": [],
                "notes": "PM Pairing",
                "newPerson": false,
                "newPersonDate": null,
                "spaceUuid": "a3f32596-e17f-11ea-a9ee-005056836670",
                "customField1": "vwillot",
                "archiveDate": null
            }
        return Promise.resolve({data: [vianneyPerson]})
    }
}

export default Client;