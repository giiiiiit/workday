package com.plugin.testPlugin;

import android.content.Context;
import android.text.TextUtils;

import net.sqlcipher.Cursor;
import net.sqlcipher.SQLException;
import net.sqlcipher.database.SQLiteDatabase;
import net.sqlcipher.database.SQLiteException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.*;

public class CipherPlugin {

    private static CipherPlugin instance;
    private static Context sContext;
    private HashMap<String, String> nameAndPwd = new HashMap<String, String>();
    private HashMap<String, DatabaseHelper> helpers = new HashMap<String, DatabaseHelper>();

    public static final int DB_VERSION = 1;

    private CipherPlugin() {
    }

    public static boolean init(Context context, String dbName, String dbPwd) {
        boolean flag=true;
        if (dbName==null||dbName.equals("")) {
            flag=false;
        }
        if (dbPwd == null) {
            dbPwd = "";
        }
        if (sContext == null) {
            sContext = context.getApplicationContext();
            SQLiteDatabase.loadLibs(sContext);
        }
        if (instance == null) {
            instance = new CipherPlugin();
            instance.nameAndPwd = new HashMap<String, String>();
        }
        if (instance.nameAndPwd.containsKey(dbName) && (instance.nameAndPwd.get(dbName) != null && instance.nameAndPwd.get(dbName).equals(dbPwd))) {
            flag=false;
        }
        if(flag){
            instance.nameAndPwd.put(dbName, dbPwd);
            instance.helpers.put(dbName, new DatabaseHelper(sContext, dbName, null, DB_VERSION));
        }
        return flag;
    }

    public static boolean hasInit(String dbName) {
        return getInstance().nameAndPwd.containsKey(dbName);
    }

    public static CipherPlugin getInstance() {
        if (instance == null) {
            return null;
        }
        return instance;
    }

    private static void testInitialize() {
        if (instance == null)
            throw new ExceptionInInitializerError("Please atleast call CipherPlugin.init once in your application");
    }

    public static String execsql(String dbname, String sqlstr) {
        if (instance == null) {
            return "error";
        }
        if (dbname==null||dbname.equals("")) {
            return "error";
        }
        if (!instance.helpers.containsKey(dbname) || instance.helpers.get(dbname) == null) {
            return "error";
        }
        try {
            SQLiteDatabase db = instance.helpers.get(dbname).getReadableDatabase(instance.nameAndPwd.get(dbname));
            db.beginTransaction();
            db.execSQL(sqlstr);
            db.setTransactionSuccessful();
            db.endTransaction();
            return "success";
        } catch (SQLiteException e) {
            return "error:"+e.getMessage();
        } catch (IllegalStateException e1) {
            return "error:"+e1.getMessage();
        } catch (SQLException e2) {
            return "error:"+e2.getMessage();
        } catch (Exception e3) {
            return "error:"+e3.getMessage();
        }
    }

    // public static List<Map<String, String>> rawquery(String dbname, String sqlstr, String[] selectArgs) {
    //     if (instance == null) {
    //         return null;
    //     }
    //     if (dbname==null||dbname.equals("")) {
    //         return null;
    //     }
    //     if (!instance.helpers.containsKey(dbname) || instance.helpers.get(dbname) == null) {
    //         return null;
    //     }
    //     try {
    //         ArrayList<Map<String, String>> arrayList = new ArrayList<Map<String, String>>();
    //         SQLiteDatabase db = instance.helpers.get(dbname).getReadableDatabase(instance.nameAndPwd.get(dbname));
    //         db.beginTransaction();
    //         Cursor cursor = db.rawQuery(sqlstr, selectArgs);
    //         while (cursor.moveToNext()) {
    //             HashMap<String, String> map = new HashMap<String, String>();
    //             String[] columnNames = cursor.getColumnNames();
    //             for (int i = 0; i < columnNames.length; i++) {
    //                 map.put(columnNames[i], cursor.getString(cursor.getColumnIndex(columnNames[i])));
    //                 arrayList.add(map);
    //             }
    //         }
    //         cursor.close();
    //         db.setTransactionSuccessful();
    //         db.endTransaction();
    //         return arrayList;
    //     } catch (SQLiteException e) {
    //         return null;
    //     } catch (IllegalStateException e1) {
    //         return null;
    //     } catch (SQLException e2) {
    //         return null;
    //     } catch (Exception e3) {
    //         return null;
    //     }
    // }


public static JSONArray rawquery(String dbname, String sqlstr, String[] selectArgs) {
     if (instance == null) {
            return null;
        }
        if (dbname==null||dbname.equals("")) {
            return null;
        }
        if (!instance.helpers.containsKey(dbname) || instance.helpers.get(dbname) == null) {
            return null;
        }
    try {
        JSONArray jsonArray = new JSONArray();
        SQLiteDatabase db = instance.helpers.get(dbname).getReadableDatabase(instance.nameAndPwd.get(dbname));
        db.beginTransaction();
        Cursor cursor = db.rawQuery(sqlstr, selectArgs);
        while (cursor.moveToNext()) {
            JSONObject jsonObject = new JSONObject();
            String[] columnNames = cursor.getColumnNames();
            for (int i = 0; i < columnNames.length; i++) {
                jsonObject.put(columnNames[i], cursor.getString(cursor.getColumnIndex(columnNames[i])));
            }
            jsonArray.put(jsonObject);
        }
        cursor.close();
        db.setTransactionSuccessful();
        db.endTransaction();
        return jsonArray;
    } catch (SQLiteException e) {
        return null;
    } catch (IllegalStateException e1) {
        return null;
    } catch (SQLException e2) {
        return null;
    } catch (Exception e3) {
        return null;
    }
}

}
