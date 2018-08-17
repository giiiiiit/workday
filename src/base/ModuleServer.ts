// /**
//  * Created by lvqiang on 2017/5/15.
//  */
// import {Injectable} from '@angular/core';
// import {HttpServer} from '../base/HttpServer';
// import {APP_SERVER_URL} from '../base/Constants';


// @Injectable()
// export class ModuleServer{

//   constructor(private httpServer:HttpServer){
//   }
//   getTest(param){
//     console.log(APP_SERVER_URL+'test/lqTestController_app.mv');
//     console.log(param);
//     // http://222.33.43.198/API/api/wttz/getassociationInfolist?pageSize=10&pageNum=1
//     return this.httpServer.post('http://222.33.43.198/API/api/wttz/getassociationInfolist',param);
//   }

//   getPracticeMain(param){
//     console.log(APP_SERVER_URL+'practice_MV/loadPractice.mv');
//     console.log(param);
//     return this.httpServer.post(APP_SERVER_URL+'practice_MV/loadPractice.mv',param);
//   }

//   login(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/login',param);
//   }

//   getUserScoreDetailList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getUserScoreDetailList',param);
//   }

//   GetInfoCountList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/GetInfoCountList',param);
//   }



//   getuserinfoListByScore(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getuserinfoListByScore',param);
//   }
//   getDepartmentListByScore(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getDepartmentListByScore',param);
//   }

//   getuserinfoListByMonthScore(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getuserinfoListByMonthScore',param);
//   }

//   getDepartmentListByMonthScore(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getDepartmentListByMonthScore',param);
//   }

//   getMyDepartmentUsers(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getMyDepartmentUsers',param);
//   }

//   getTZJJDutyTypeEnum(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getTZJJDutyTypeEnum',param);
//   }



//   getUsersByDepartmentAndQuery(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getUsersByDepartmentAndQuery',param);
//   }




//   Getuserinfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/Getuserinfo',param);
//   }

//   getuserinfoByRealName(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getuserinfoByRealName',param);
//   }

//   GetStationTopNewsByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/GetStationTopNewsByOid',param);
//   }


//   getrisklist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getrisklist',param);
//   }



//   getmyrisk(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getmyrisk',param);
//   }

//   getmytodorisk(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getmytodorisk',param);
//   }

//   getCloserisklist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getCloserisklist',param);
//   }

//   gettsinfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/gettsinfolist',param);
//   }

//   gettsinfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/gettsinfo',param);
//   }





//   //防险表彰公示

//   getriskconlist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getriskconlist',param);
//   }

//   getriskcon(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getriskcon',param);
//   }
//   AddRisk(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/AddRisk',param);
//   }

//   ApproveRisk(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/ApproveRisk',param);
//   }

//   AddRiskTaskDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/AddRiskTaskDetail',param);
//   }

//   RecieveRiskTaskDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/RecieveRiskTaskDetail',param);
//   }

//   RiskTaskDetailViewModel(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/RiskTaskDetailViewModel',param);
//   }

//   FinishRiskTaskDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/FinishRiskTaskDetail',param);
//   }

//   getCarouselImagelist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getCarouselImagelist',param);
//   }

//   getRiskByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getRiskByOid',param);
//   }

//   CloseRisk(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/CloseRisk',param);
//   }

//   getDepartmentList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/user/getDepartmentList',param);
//   }

//   AddRiskTaskDetailImage(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/AddRiskTaskDetailImage',param);
//   }

//   getStationTopNewslist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getStationTopNewslist',param);
//   }


//   //互帮互助
//   getappraisalslist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getappraisalslist',param);
//   }
//   getmyappraisals(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getmyappraisals',param);
//   }
//   getmytodoappraisals(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getmytodoappraisals',param);
//   }

//   getAppraisalsByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getAppraisalsByOid',param);
//   }

//   AddAppraisals(param){
//   return this.httpServer.post(APP_SERVER_URL+'api/aqfx/AddAppraisals',param);
//   }

//   RecieveAppraisals(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/RecieveAppraisals',param);
//   }

//   FinishAppraisals(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/FinishAppraisals',param);
//   }

//   CancelAppraisals(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/CancelAppraisals',param);
//   }
//   CloseAppraisals(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/CloseAppraisals ',param);
//   }

//   AddTypicalSafetyInformationComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/AddTypicalSafetyInformationComment',param);
//   }
//   getTsinfoComByTsinfoOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getTsinfoComByTsinfoOid',param);
//   }
//   getTypicalSafetyInformationByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getTypicalSafetyInformationByOid',param);
//   }
//   getrecreationalaclistByRAOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalaclistByRAOid',param);
//   }




//   getRiskControlRecognitionByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getRiskControlRecognitionByOid',param);
//   }
//   getRiskControlRecognitionCommentByRCROid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getRiskControlRecognitionCommentByRCROid',param);
//   }
//   getStationTopNewsCommentBytopnewsOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getStationTopNewsCommentBytopnewsOid',param);
//   }

//   getRiskCommentByRiskOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getRiskCommentByRiskOid',param);
//   }


//   AddRiskControlRecognitionComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/AddRiskControlRecognitionComment',param);
//   }

//   AddRiskComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/aqfx/AddRiskComment',param);
//   }



//   AddStationTopNewsComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/xxst/AddStationTopNewsComment',param);
//   }




//   getSTStoryByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getSTStoryByOid',param);
//   }


//   //设备
//   getequipmentinfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getequipmentinfolist',param);
//   }

//   getequipmentinfolistByCon(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getequipmentinfolistByCon',param);
//   }

//   getequipmentinfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getequipmentinfo',param);
//   }

//   AddEquipmentBorrowRecord(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/nysb/AddEquipmentBorrowRecord',param);
//   }

//   getequipmentborrowlist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getequipmentborrowlist',param);
//   }

//   getequipmentborrowinglist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getequipmentborrowinglist',param);
//   }

//   getequipmentborrowByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getequipmentborrowByOid',param);
//   }

//   getmyequipmentborrow(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getmyequipmentborrow',param);
//   }

//   getmyTodoequipmentborrow(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/nysb/getmyTodoequipmentborrow',param);
//   }

//   RecieveEquipmentBorrowRecord(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/nysb/RecieveEquipmentBorrowRecord',param);
//   }
//   ReturnEquipmentBorrowRecord(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/nysb/ReturnEquipmentBorrowRecord',param);
//   }
//   ConfirmEquipmentBorrowRecord(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/nysb/ConfirmEquipmentBorrowRecord ',param);
//   }

//   CorfirmReturnEquipmentBorrowRecord(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/nysb/CorfirmReturnEquipmentBorrowRecord ',param);
//   }


//   //投票
//   getVotingActivitiesInfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getVotingActivitiesInfolist',param);
//   }

//   GetMyVotingActivitiesInfoList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/GetMyVotingActivitiesInfoList',param);
//   }

//   GetMyTodoVotingActivitiesInfoList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/GetMyTodoVotingActivitiesInfoList',param);
//   }

//   getVotingActivitiesInfoByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getVotingActivitiesInfoByOid',param);
//   }
//   GetVotingItemInfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/GetVotingItemInfo',param);
//   }
//   GetVotingItemInfoReportListByActivitieOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/GetVotingItemInfoReportListByActivitieOid',param);
//   }

//   GetVotingItemCommentListByItemOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/GetVotingItemCommentListByItemOid',param);
//   }

//   AddVotingItemComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/AddVotingItemComment',param);
//   }

//   AddVotingDetailInfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/AddVotingDetailInfo',param);
//   }

//   getLotteryInfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getLotteryInfolist',param);
//   }
//   getLotteryInfoByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getLotteryInfoByOid',param);
//   }
//   GetLotteryResultSeqListByLotteryOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/GetLotteryResultSeqListByLotteryOid',param);
//   }



// //运输
//   gettransportolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/gettransportolist',param);
//   }

//   getmytransportreminder(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/getmytransportreminder',param);
//   }


//   getmyTodotransportreminder(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/getmyTodotransportreminder',param);
//   }


//   AddTransportReminder(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/AddTransportReminder',param);
//   }

//   gettransportreminder(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/gettransportreminder',param);
//   }

//   gettransportreminderlist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/gettransportreminderlist',param);
//   }

//   AddTransportReminderTaskDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/AddTransportReminderTaskDetail',param);
//   }
//   CloseTransportReminder(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/CloseTransportReminder',param);
//   }

//   RecieveTransportReminderTaskDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/RecieveTransportReminderTaskDetail',param);
//   }

//   gettransporttasklist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/gettransporttasklist',param);
//   }

//   getmyTransportReminderTaskDetail(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/getmyTransportReminderTaskDetail',param);
//   }

//   getmytodoTransportReminderTaskDetail(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/getmytodoTransportReminderTaskDetail',param);
//   }

//   FinishTransportReminderTaskDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/FinishTransportReminderTaskDetail',param);
//   }
//   gettransporttask(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/gettransporttask',param);
//   }

//   getMyTransportReminderTaskDetailList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/getMyTransportReminderTaskDetailList',param);
//   }

//   gettransporttasklistByTROid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/gettransporttasklistByTROid',param);
//   }

//   getmystransporto(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/getmystransporto',param);
//   }

//   getmyTodotransporto(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/getmyTodotransporto',param);
//   }

//   gettransporto(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/ysrw/gettransporto',param);
//   }

//   CancelTransportOrganization(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/CancelTransportOrganization',param);
//   }

//   AddTransportOrganization(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/AddTransportOrganization',param);
//   }

//   CloseTransportOrganization(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/CloseTransportOrganization',param);
//   }

//   ForwardTransportOrganization(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/ForwardTransportOrganization',param);
//   }

//   RecieveTransportOrganization(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/RecieveTransportOrganization',param);
//   }

//   FinishTransportOrganization(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/ysrw/FinishTransportOrganization',param);
//   }




//   //信息

//   //值班帮
//   getdutyslist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getdutyslist',param);
//   }

//   getmydutyslist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getmydutyslist',param);
//   }

//   getmytododutyslist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getmytododutyslist',param);
//   }


//   getDutyByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getDutyByOid',param);
//   }

//   getDutyCommentsByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getDutyCommentsByOid',param);
//   }

//   addDutyComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/addDutyComment',param);
//   }

//   CancelDuty(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CancelDuty',param);
//   }

//   ApproveDuty(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/ApproveDuty',param);
//   }

//   AddDuty(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/AddDuty',param);
//   }

//   CloseDuty(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CloseDuty',param);
//   }

//   DutyScore(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/DutyScore',param);
//   }






//   //扫雪
//   GetSnowsList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetSnowsList',param);
//   }

//   GetMySnowsList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMySnowsList',param);
//   }

//   GetMyTodoSnowsList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMyTodoSnowsList',param);
//   }

//   getSnowByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getSnowByOid',param);
//   }

//   getSnowCommentsByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getSnowCommentsByOid',param);
//   }

//   addSnowComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/addSnowComment',param);
//   }

//   CancelSnow(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CancelSnow',param);
//   }

//   ApproveSnow(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/ApproveSnow',param);
//   }

//   CloseSnow(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CloseSnow',param);
//   }

//   SnowScore(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/SnowScore',param);
//   }

//   AddSnow(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/AddSnow',param);
//   }






//   //合理化建议
//   GetSuggestsList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetSuggestsList',param);
//   }

//   GetMySuggestsList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMySuggestsList',param);
//   }

//   GetMyTodoSuggestsList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMyTodoSuggestsList',param);
//   }

//   getSuggestByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getSuggestByOid',param);
//   }

//   getSuggestCommentsByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getSuggestCommentsByOid',param);
//   }

//   addSuggestComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/addSuggestComment',param);
//   }

//   CancelSuggest(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CancelSuggest',param);
//   }

//   ApproveSuggest(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/ApproveSuggest',param);
//   }

//   CloseSuggest(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CloseSuggest',param);
//   }

//   SuggestScore(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/SuggestScore',param);
//   }

//   AddSuggest(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/AddSuggest',param);
//   }


//   //防差错风险
//   GetRisksList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetRisksList',param);
//   }

//   GetMyRisksList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMyRisksList',param);
//   }

//   GetMyTodoRisksList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMyTodoRisksList',param);
//   }

//   gettzjjRiskByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getRiskByOid',param);
//   }

//   getRiskCommentsByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getRiskCommentsByOid',param);
//   }

//   addRiskComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/addRiskComment',param);
//   }

//   CancelRisk(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CancelRisk',param);
//   }

//   ApprovetzjjRisk(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/ApproveRisk',param);
//   }

//   ClosetzjjRisk(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CloseRisk',param);
//   }

//   RiskScore(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/RiskScore',param);
//   }

//   AddtzjjRisk(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/AddRisk',param);
//   }



//   //查找安全隐患
//   GetSecuritysList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetSecuritysList',param);
//   }

//   GetMySecuritysList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMySecuritysList',param);
//   }

//   GetMyTodoSecuritysList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/GetMyTodoSecuritysList',param);
//   }

//   getSecurityByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getSecurityByOid',param);
//   }

//   getSecurityCommentsByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/tzjj/getSecurityCommentsByOid',param);
//   }


//   addSecurityComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/addSecurityComment',param);
//   }

//   CancelSecurity(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CancelSecurity',param);
//   }



//   AddSecurity(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/AddSecurity',param);
//   }

//   ApproveSecurity(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/ApproveSecurity',param);
//   }

//   CloseSecurity(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/CloseSecurity',param);
//   }

//   SecurityScore(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/tzjj/SecurityScore',param);
//   }



//   getSTNewslist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getSTNewslist',param);
//   }

//   getSTCircularlist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getSTCircularlist',param);
//   }

//   getSTPublicitylist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getSTPublicitylist',param);
//   }

//   getSTStorylist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getSTStorylist',param);
//   }




//   AddSTStoryComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/xxst/AddSTStoryComment',param);
//   }

//   getSTStorycomBySTStoryOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/xxst/getSTStorycomBySTStoryOid',param);
//   }


//   //环境治安
//   getRegionInfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getRegionInfolist',param);
//   }
//   getEnRatingInfoByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getEnRatingInfoByOid',param);
//   }
//   getalarmInfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getalarmInfolist',param);
//   }
//   getPhoneNumberlist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getPhoneNumberlist',param);
//   }


//   getEnvironmentalRatingInfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getEnvironmentalRatingInfolist',param);
//   }

//   getMngInfoList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getMngInfoList',param);
//   }
//   getMyMngInfoList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getMyMngInfoList',param);
//   }

//   getMyTodoMngInfoList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getMyTodoMngInfoList',param);
//   }

//   getEnInfoList(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getEnInfoList',param);
//   }

//   getmyeninfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getmyeninfo',param);
//   }

//   getmyTodoeninfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getmyTodoeninfo',param);
//   }

//   getMnginfoByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getMnginfoByOid',param);
//   }

//   GetEnInfoByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/GetEnInfoByOid',param);
//   }

//   AddMngInfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/AddMngInfo',param);
//   }

//   FinishMngInfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/FinishMngInfo',param);
//   }

//   AddENinfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/AddENinfo',param);
//   }

//   ForwordENinfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/ForwordENinfo',param);
//   }


//   AddEninfoComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/AddEninfoComment',param);
//   }

//   geteninfocomByEnOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/geteninfocomByEnOid',param);
//   }

//   RecieveENinfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/RecieveENinfo',param);
//   }

//   FinishENinfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/FinishENinfo',param);
//   }

//   CancelENinfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/CancelENinfo',param);
//   }

//   CloseENinfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/CloseENinfo',param);
//   }

//   CancelMngInfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/CancelMngInfo',param);
//   }

//   getEnvironmentalRatingInfoByOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getEnvironmentalRatingInfoByOid',param);
//   }

//   getEnRatingInfocomByEnOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/hjza/getEnRatingInfocomByEnOid',param);
//   }
//   AddEnRatingInfoComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/hjza/AddEnRatingInfoComment',param);
//   }


// //文体
//   getrecreationalacinfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalacinfolist',param);
//   }

//   getrecreationalacinfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalacinfo',param);
//   }


//   test(param){
//     // return this.httpServer.post('http://localhost:8080/practice_server/views/resources/coursewareManagerInit.do',param);
//     return this.httpServer.post(APP_SERVER_URL+'api/nysb/AddRisk',param);
//   }

//   getrecreationalainfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalainfolist',param);
//   }
//   getmyrecreationalainfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getmyrecreationalainfo',param);
//   }
//   getmyTodorecreationalainfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getmyTodorecreationalainfo',param);
//   }
//   getassociationInfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getassociationInfolist',param);
//   }

//   GetAssociationMemberInfoPageListByUser(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/GetAssociationMemberInfoPageListByUser',param);
//   }

//   getmyassociationInfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getmyassociationInfo',param);
//   }

//   getmyTodoassociationmember(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getmyTodoassociationmember',param);
//   }
//   AddRegistrationInformationDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/AddRegistrationInformationDetail',param);
//   }

//   CancelRegistrationInformationDetail(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/CancelRegistrationInformationDetail',param);
//   }
//   AddRecreationalActivitiesComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/AddRecreationalActivitiesComment',param);
//   }


//   getrecreationalainfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalainfo',param);
//   }
//   getrecreationalapinfolist(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalapinfolist',param);
//   }

//   getrecreationalapinfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalapinfo',param);
//   }

//   getassociationInfo(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getassociationInfo',param);
//   }

//   getassociationmember(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getassociationmember',param);
//   }


//   AddAssociationMemberInfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/AddAssociationMemberInfo',param);
//   }

//   CancelAssociationMemberInfoByASSID(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/CancelAssociationMemberInfoByASSID',param);
//   }
//   FinishAssociationMemberInfo(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/FinishAssociationMemberInfo',param);
//   }
//   getrecreationalccbyRACOid(param){
//     return this.httpServer.get(APP_SERVER_URL+'api/wttz/getrecreationalccbyRACOid',param);
//   }
//   AddRecreationalActivitiesCommendComment(param){
//     return this.httpServer.post(APP_SERVER_URL+'api/wttz/AddRecreationalActivitiesCommendComment',param);
//   }


//   // getrisklist(param){
//   //   return this.httpServer.get(APP_SERVER_URL+'api/aqfx/getrisklist',param);
//   // }
// }
