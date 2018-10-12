/********* TestPlugin.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface TestPlugin : CDVPlugin
- (void)initDatabase:(CDVInvokedUrlCommand*)command;
- (void)execsql:(CDVInvokedUrlCommand*)command;
- (void)query:(CDVInvokedUrlCommand*)command;
@end
@implementation TestPlugin
- (void)initDatabase:(CDVInvokedUrlCommand*)command{}
- (void)execsql:(CDVInvokedUrlCommand*)command{}
- (void)query:(CDVInvokedUrlCommand*)command{}
@end