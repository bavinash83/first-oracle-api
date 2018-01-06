module.exports = class dbconnect{
    constructor(){
        this.dbconnect = "";
    }

    dbcon(tagId,testId){
        return this.dbconnect = "tag Id is set to " + tagId + "\n test Id is set to " + testId;
    }
}