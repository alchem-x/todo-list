package alchemy.works.todo;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    private static final String TODO_LIST = "file:///android_asset/index.html";

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.setContentView(R.layout.activity_main);

        this.initWebView();

        // LOCAL RESOURCE
        this.getWebView().loadUrl(TODO_LIST);
    }

    @Override
    public void onBackPressed() {
        if (this.getWebView().canGoBack()) {
            this.getWebView().goBack();
        } else {
            super.onBackPressed();
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void initWebView() {
        WebView webView = this.findViewById(R.id.mainWebView);
        // settings
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        //
        this.webView = webView;
    }

    private WebView getWebView() {
        return Objects.requireNonNull(this.webView, "this.webView is null");
    }
}