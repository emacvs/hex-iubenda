#import "HexIubenda.h"
#import <iubenda/iubenda-Swift.h>
@implementation HexIubenda
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_METHOD(multiply:(double)a
                  b:(double)b
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSNumber *result = @(a * b);

    resolve(result);
}

RCT_EXPORT_METHOD(initialize:(NSDictionary *)config
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    @try {
      IubendaCMPConfiguration *configuration = [[IubendaCMPConfiguration alloc] init];
      
      if ([config objectForKey:@"gdprEnabled"]) {
        configuration.gdprEnabled = [config objectForKey:@"gdprEnabled"];
      }
      
      if ([config objectForKey:@"forceConsent"]) {
        configuration.forceConsent = [config objectForKey:@"forceConsent"];
      }
      
      if ([config objectForKey:@"googleAds"]) {
        configuration.googleAds = [config objectForKey:@"googleAds"];
      }
      
      if ([config objectForKey:@"siteId"]) {
        configuration.siteId = [config objectForKey:@"siteId"];
      }
      
      if ([config objectForKey:@"cookiePolicyId"]) {
        configuration.cookiePolicyId = [config objectForKey:@"cookiePolicyId"];
      }
      
      if ([config objectForKey:@"cssContent"]) {
        configuration.cssContent = [config objectForKey:@"cssContent"];
      }
      
      if ([config objectForKey:@"jsonContent"]) {
        configuration.jsonContent = [config objectForKey:@"jsonContent"];
      }
      
      if ([config objectForKey:@"cssUrl"]) {
        configuration.cssUrl = [config objectForKey:@"cssUrl"];
      }
      
      if ([config objectForKey:@"applyStyles"]) {
        configuration.applyStyles = [config objectForKey:@"applyStyles"];
      }
      
      if ([config objectForKey:@"acceptIfDismissed"]) {
        configuration.acceptIfDismissed = [config objectForKey:@"acceptIfDismissed"];
      }
      
      if ([config objectForKey:@"skipNoticeWhenOffline"]) {
        configuration.skipNoticeWhenOffline = [config objectForKey:@"skipNoticeWhenOffline"];
      }
      
      if ([config objectForKey:@"preventDismissWhenLoaded"]) {
        configuration.preventDismissWhenLoaded = [config objectForKey:@"preventDismissWhenLoaded"];
      }
      
      if ([config objectForKey:@"csVersion"]) {
        configuration.csVersion = [config objectForKey:@"csVersion"];
      }
      
      if ([config objectForKey:@"proxyUrl"]) {
        configuration.proxyUrl = [config objectForKey:@"proxyUrl"];
      }
      
      if ([config objectForKey:@"portraitWidth"]) {
        configuration.portraitWidth = [[config objectForKey:@"portraitWidth"] integerValue];
      }
      
      if ([config objectForKey:@"portraitHeight"]) {
        configuration.portraitHeight = [[config objectForKey:@"portraitHeight"] integerValue];
      }
      
      if ([config objectForKey:@"landscapeWidth"]) {
        configuration.landscapeWidth = [[config objectForKey:@"landscapeWidth"] integerValue];
      }
      
      if ([config objectForKey:@"landscapeHeight"]) {
        configuration.landscapeHeight = [[config objectForKey:@"landscapeHeight"] integerValue];
      }
      
      [IubendaCMP initializeWith:configuration];
      
      // Se l'inizializzazione ha successo, risolvi la promessa
      resolve(@{ @"status": @"initialized successfully" });
    } @catch (NSException *exception) {
      // Se si verifica un'eccezione, rifiuta la promessa
      reject(@"initialize_error", @"Failed to initialize Iubenda CMP", nil);
    }
  });
}


@end