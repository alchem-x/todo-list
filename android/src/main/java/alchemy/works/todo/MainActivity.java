package alchemy.works.todo;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.webkit.*;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    private static final String TODO_LIST = "https://appassets.androidplatform.net/assets/index_standalone.html";

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.activity_main);
        this.initWebView();
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
        this.webView = this.findViewById(R.id.mainWebView);
        WebViewAssetLoader assetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();
        this.webView.setWebViewClient(new WebViewClient() {
            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return assetLoader.shouldInterceptRequest(request.getUrl());
            }
        });
        this.webView.getSettings().setJavaScriptEnabled(true);
        this.webView.getSettings().setDomStorageEnabled(true);
    }

    private WebView getWebView() {
        return Objects.requireNonNull(this.webView, "webView is null");
    }
}
