{
    "id": "api.framework.list",
    "ver": "1.0",
    "ts": "2019-09-03T10:57:58.019Z",
    "params": {
        "resmsgid": "b0716530-ce39-11e9-bcde-898cea6c63a5",
        "msgid": "b06a3940-ce39-11e9-bcde-898cea6c63a5",
        "status": "successful",
        "err": null,
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "frameworks": [
            {
                "owner": "in.ekstep",
                "identifier": "NCF",
                "code": "NCF",
                "consumerId": "150610ca-4ffb-4e0a-b4ef-c1305e9100d5",
                "channel": "in.ekstep",
                "description": "NCF Framework",
                "type": "K-12",
                "createdOn": "2018-02-06T14:07:32.478+0000",
                "versionKey": "1546618086947",
                "channels": [
                    {
                        "identifier": "01231801647892889628",
                        "name": "TRUE",
                        "objectType": "Channel",
                        "relation": "hasSequenceMember",
                        "description": "test",
                        "status": "Live"
                    },
                    {
                        "identifier": "in.ekstep",
                        "name": "Ekstep",
                        "objectType": "Channel",
                        "relation": "hasSequenceMember",
                        "description": "Channel for in.ekstep",
                        "status": "Live"
                    }
                ],
                "appId": "prod.diksha.portal",
                "name": "NCF framework",
                "lastUpdatedOn": "2019-01-04T16:08:06.947+0000",
                "categories": [
                    {
                        "identifier": "ncf_medium",
                        "name": "Medium",
                        "objectType": "CategoryInstance",
                        "relation": "hasSequenceMember",
                        "description": "",
                        "index": 2,
                        "status": "Live"
                    },
                    {
                        "identifier": "ncf_gradelevel",
                        "name": "Class",
                        "objectType": "CategoryInstance",
                        "relation": "hasSequenceMember",
                        "description": "",
                        "index": 3,
                        "status": "Live"
                    },
                    {
                        "identifier": "ncf_topic",
                        "name": "Topic",
                        "objectType": "CategoryInstance",
                        "relation": "hasSequenceMember",
                        "description": "Concepts",
                        "index": 5,
                        "status": "Live"
                    },
                    {
                        "identifier": "ncf_subject",
                        "name": "Subject",
                        "objectType": "CategoryInstance",
                        "relation": "hasSequenceMember",
                        "description": "",
                        "index": 4,
                        "status": "Live"
                    },
                    {
                        "identifier": "ncf_board",
                        "name": "Board",
                        "objectType": "CategoryInstance",
                        "relation": "hasSequenceMember",
                        "description": "",
                        "index": 1,
                        "status": "Live"
                    }
                ],
                "status": "Live"
            }
        ],
        "count": 1
    }
}