package com.studymate.app;

import android.os.Bundle;
import androidx.activity.OnBackPressedCallback;
import com.getcapacitor.BridgeActivity;
import android.webkit.WebView;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {

                WebView webView = getBridge().getWebView();

                if (webView == null) {
                    finishAndRemoveTask();
                    return;
                }

                String url = webView.getUrl();

                if (url != null && url.contains("dashboard.html")) {
                    webView.clearHistory();
                    finishAndRemoveTask();
                    return;
                }

                if (webView.canGoBack()) {
                    webView.goBack();
                } else {
                    finishAndRemoveTask();
                }
            }
        });
    }
}
