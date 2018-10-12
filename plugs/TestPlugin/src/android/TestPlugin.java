package com.plugin.testPlugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import android.content.Context;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.*;



/**
 * This class echoes a string called from JavaScript.
 */
public class TestPlugin extends CordovaPlugin {
    
    StringBuffer massage=null;
    Context context=null;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        if (action.equals("initDatabase")){
            String dataname=args.getString(0);
            String key=args.getString(1);
            this.initDatabase(dataname,key,callbackContext);
            return true;
        }else if (action.equals("query")){
            String sqlstr=args.getString(0);
            String dataname=args.getString(1);
            this.query(dataname,sqlstr,callbackContext);
            return true;
        }else if (action.equals("execsql")){
            String sqlstr=args.getString(0);
            String dataname=args.getString(1);
            this.execsql(dataname,sqlstr,callbackContext);
            return true;
        }
        
        return false;
    }

    //初始化方法
    private void initDatabase(String dataname,String key, CallbackContext callbackContext){
        if(context==null){
            context=cordova.getActivity().getApplicationContext();
        }
        boolean flag=CipherPlugin.init(context,dataname,key);
        if(flag){
            callbackContext.success("success:"+dataname+"初始化成功");
        }else{
            callbackContext.error("error:"+dataname+"初始化失败");
        }
    }


    //数据库执行语句方法
    private void execsql(String dataname,String sqlstr, CallbackContext callbackContext){
        String massage=CipherPlugin.execsql(dataname,sqlstr);
        if(massage.indexOf("error")>0){
            callbackContext.success(massage+":"+sqlstr+":成功");
        }else{
            callbackContext.error(massage+":"+sqlstr+":失败");
        }     
    }


    private void query(String dataname,String sqlstr, CallbackContext callbackContext) {
        JSONArray list=CipherPlugin.rawquery(dataname,sqlstr,null);
        if (list!= null) {
            callbackContext.success(list);
        } else {
            callbackContext.error("null");
        }
    }

}
