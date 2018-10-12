package com.plugin.testPlugin;

import android.content.Context;

import net.sqlcipher.database.SQLiteDatabase;
import net.sqlcipher.database.SQLiteOpenHelper;

public class DatabaseHelper extends SQLiteOpenHelper {

    public DatabaseHelper(Context context, String name, SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }


    @Override
    public void onCreate(final SQLiteDatabase db) {
    }


    @Override
    public void onUpgrade(final SQLiteDatabase db, int oldV, final int newV) {

    }

}
