const _ = require('lodash');

let room = {
    "Appointments": [{
        "AltID": "f2c47e99-9a72-42f7-917b-3fc711d98eb8",
        "Attendees": "\"Vivek\" <vivek@graspio.com>, \"admin\" <vishnu@graspio.com>|| ",
        "End": "/Date(1565078400000)/",
        "EventOrMeeting": 1,
        "GW_MeetingID": "290BE9BB-7C50-4707-A467-321D969E62D2",
        "IsPrivate": false,
        "LastModified": "/Date(1565096235000)/",
        "Location": "",
        "MeetingComment": "",
        "MeetingSubject": "fusion cloud ",
        "MeetingType": 1,
        "NotifyAction": 1,
        "Organizer": "\"admin\" <vishnu@graspio.com>",
        "RRule": "",
        "RV_MeetingID": "290BE9BB-7C50-4707-A467-321D969E62D2",
        "RoomID": "ddcc0afd-f5e8-488b-b098-2317f3f6bc45",
        "Start": "/Date(1565076600000)/",
        "TimeZoneId": "India Standard Time"
    }],
    "Description": "",
    "LastModified": "/Date(1565070840837+0530)/",
    "RoomID": "ddcc0afd-f5e8-488b-b098-2317f3f6bc45",
    "RoomName": "GraspIO Conference"
}

let meeting = {
    "AltID": "f2c47e99-9a72-42f7-917b-3fc711d98eb8",
    "Attendees": "\"Vivek\" <vivek@graspio.com>, \"admin\" <vishnu@graspio.com>|| ",
    "End": "/Date(1565078400000)/",
    "EventOrMeeting": 1,
    "GW_MeetingID": "290BE9BB-7C50-4707-A467-321D969E62D2",
    "IsPrivate": false,
    "LastModified": "/Date(1565096235000)/",
    "Location": "",
    "MeetingComment": "",
    "MeetingSubject": "fusion cloud ",
    "MeetingType": 1,
    "NotifyAction": 1,
    "Organizer": "\"admin\" <vishnu@graspio.com>",
    "RRule": "",
    "RV_MeetingID": "290BE9BB-7C50-4707-A467-321D969E62D2",
    "RoomID": "ddcc0afd-f5e8-488b-b098-2317f3f6bc45",
    "Start": "/Date(1565076600000)/",
    "TimeZoneId": "India Standard Time"
}

let merge = (arr1, arr2) => {
    arr2.forEach(ele => {
        let matching = (obj) => {
            return _.isEqual(obj, ele)
        }
        if (!arr1.some(matching)) {
            arr1.push(ele);
        }
    });
    return arr1;
}
// console.time("merge");
// console.log(merge(arr1, []));
// console.timeEnd("merge");
// let merge = _.merge(array1, array2);

// console.log([array1.concat(array2));


let obj = {};
obj["MeetingID"] = meeting["RV_MeetingID"];
obj["MeetingSubject"] = meeting["MeetingSubject"];
obj["Organizer"] = {};
obj["Organizer"]["Email"] = meeting["Organizer"].match(/<.*@.*>/i)[0].slice(1, -1);
obj["Organizer"]["Name"] = meeting["Organizer"].match(/".*"/i)[0].slice(1, -1);
obj["Attendees"] = [];
meeting["Attendees"].split(',').forEach(ele => {
    let user = {}
    user["Name"] = ele.match(/".*"/i)[0].slice(1, -1);
    user["Email"] = ele.match(/<.*@.*>/i)[0].slice(1, -1);
    obj["Attendees"].push(user);
});
obj["start"] = new Date(parseInt(meeting["Start"].match(/\d+/g)) + 330 * 60)
obj["end"] = new Date(parseInt(meeting["End"].match(/\d+/g)) + 330 * 60)

console.log(obj);



// let attendees = room2.Appointments[0].Attendees.split(',').map(x => x.match(/<.*@.*>/i)[0].substr(1).slice(0, -1));



// console.log(attendees);

// let now = new Date().getTime() + 330 * 60;
// console.log("now", now);

// const currentDate = new Date().getTime();
// console.log("currentDate", currentDate)
// const compare = (object1, object2) => {
//     console.log(_.isEqual(a, b));
// }

// a = {"a": 1}, b = {"b": 2};
// console.log(_.includes([a, b], c));

// compare(a, b);