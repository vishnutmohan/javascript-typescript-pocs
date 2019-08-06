let a = {
    "Description": "",
    "LastModified": "/Date(1565002330357+0530)/",
    "RoomID": "a242b98b-eb58-4f46-898f-57eee7a741a6",
    "RoomName": "Conference Room",
    "Meeting":[
        {
            "AltID": "f9de4035-4fe1-42c2-bef5-e601fea2c176",
            "Attendees": "",
            "End": "/Date(1564653120000)/",
            "EventOrMeeting": 1,
            "GW_MeetingID": "03188024-EDCD-40B4-81DB-4988A634C5B7",
            "IsPrivate": false,
            "LastModified": "/Date(1564672022000)/",
            "Location": "",
            "MeetingComment": "",
            "MeetingSubject": "Default Subject",
            "MeetingType": 1,
            "NotifyAction": 0,
            "Organizer": "\"Default Organizer \" <>",
            "RRule": "",
            "RV_MeetingID": "03188024-EDCD-40B4-81DB-4988A634C5B7",
            "RoomID": "ddcc0afd-f5e8-488b-b098-2317f3f6bc45",
            "Start": "/Date(1564652220000)/",
            "TimeZoneId": "India Standard Time"
        }
    ]
};
let b = {
    "Description": "",
    "LastModified": "/Date(1565002330357+0530)/",
    "RoomID": "a242b98b-eb58-4f46-898f-57eee7a741a6",
    "RoomName": "Conference Room",
    "Meeting":[
        {
            "AltID": "f9de4035-4fe1-42c2-bef5-e601fea2c176",
            "Attendees": "",
            "End": "/Date(1564653120000)/",
            "EventOrMeeting": 1,
            "GW_MeetingID": "03188024-EDCD-40B4-81DB-4988A634C5B7",
            "IsPrivate": false,
            "LastModified": "/Date(1564672022000)/",
            "Location": "",
            "MeetingComment": "",
            "MeetingSubject": "Default Subject",
            "MeetingType": 1,
            "NotifyAction": 0,
            "Organizer": "\"Default Organizer \" <>",
            "RRule": "",
            "RV_MeetingID": "03188024-EDCD-40B4-81DB-4988A634C5B7",
            "RoomID": "ddcc0afd-f5e8-488b-b098-2317f3f6bc45",
            "Start": "/Date(1564652220000)/",
            "TimeZoneId": "India Standard Time"
        }
    ]
};

let c = {
    "Description": "",
    "LastModified": "/Date(1565002330357+0530)/",
    "RoomID": "a242b98b-eb58-4f46-898f-57eee7a741a6",
    "RoomName": "Conference Room",
    "Meeting":[
        {
            "AltID": "f9de4035-4fe1-42c2-bef5-e601fea2c176",
            "Attendees": "",
            "End": "/Date(1564653120000)/",
            "EventOrMeeting": 1,
            "GW_MeetingID": "03188024-EDCD-40B4-81DB-4988A634C5B7",
            "IsPrivate": false,
            "LastModified": "/Date(1564672022000)/",
            "Location": "",
            "MeetingComment": "",
            "MeetingSubject": "Default Subject",
            "MeetingType": 1,
            "NotifyAction": 0,
            "Organizer": "\"Default Organizer \" <>",
            "RRule": "",
            "RV_MeetingID": "03188024-EDCD-40B4-81DB-4988A634C5B7",
            "RoomID": "ddcc0afd-f5e8-488b-b098-2317f3f6bc45",
            "Start": "/Date(1564652220000)/",
            "TimeZoneId": "India Standard Time"
        }
    ]
};

const _ = require('lodash');

const compare = (object1, object2) => {
    console.log(_.isEqual(a, b));
}

// a = {"a": 1}, b = {"b": 2};
console.log(_.includes([a, b], c));

// compare(a, b);