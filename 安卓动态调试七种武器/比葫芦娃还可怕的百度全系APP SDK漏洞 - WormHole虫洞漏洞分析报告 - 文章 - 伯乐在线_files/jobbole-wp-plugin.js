/**
 * Created by huangyuliang on 14-5-5.
 */
jQuery(document).ready(function ($) {

    $('.register-user-only').click(function(){
        return false;
    });

    $('.fancybox').fancybox();

    $(".vote-post-up").bind("click", function () {

        var curr_post_id = $(this).attr("data-post-id");
        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        if ($('#' + curr_post_id + "voteflag").hasClass('voted')) {
            return false;
        }

        vote_post_up_ajax($(this),'vote_post_action',curr_post_id);
    });

    $(".vote-date-up").bind("click", function () {

        var curr_post_id = $(this).attr("data-post-id");
        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        if ($('#' + curr_post_id + "voteflag").hasClass('voted')) {
            return false;
        }

        vote_post_up_ajax($(this),'vote_date_action',curr_post_id);
    });

    $(".vote-comment-up").bind("click", function () {

        var curr_comment_id = $(this).attr("data-comment-id");
        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        if ($('.' + curr_comment_id + "voteflag").hasClass('voted')) {
            return false;
        }

        vote_comment_ajax($(this),curr_comment_id, 1);
    });

    $(".vote-comment-down").bind("click", function () {

        var curr_comment_id = $(this).attr("data-comment-id");

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        if ($('.' + curr_comment_id + "voteflag").hasClass('voted')) {
            return false;
        }

        vote_comment_ajax($(this),curr_comment_id, 2);
    });

    $("#trans-article-submit-btn").bind("click", function () {

        var article_title = $('#submit_form_source_article_title').val();
        var article_url = $('#submit_form_source_article_url').val();
        var article_tags = $('#submit_form_source_article_tags').val();
        var article_excerpt = $('#submit_form_source_article_excerpt').val();

        recommend_trans_article($(this),"recommend_trans_article", article_title, article_url, article_tags,article_excerpt);
    });

    $("#trans-article-audit-btn").bind("click", function(){

        var article_id = $('#audit_form_source_article_id').val();
        var article_title = $('#audit_form_source_article_title').val();
        var article_url = $('#audit_form_source_article_url').val();
        var article_tags = $('#audit_form_source_article_tags').val();
        var article_excerpt = $('#audit_form_source_article_excerpt').val();
        var audit_result = $('#audit_result').val();
        var audit_msg = $('#audit_form_msg').val();

        audit_trans_article($(this),"audit_trans_article", article_id, article_title, article_url, article_tags, article_excerpt, audit_result, audit_msg);
    });

    $("#top-article-submit-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var article_title = $('#submit_form_source_article_title').val();
        var article_url = $('#submit_form_source_article_url').val();
        var article_tags = $('#submit_form_source_article_tags').val();
        var article_excerpt = tinymce.activeEditor.getContent();

        submit_top_article($(this),"submit_top_article", article_title, article_url, article_tags, article_excerpt);
    });

    $("#top-article-audit-btn").bind("click", function(){

        var article_id = $('#audit_form_source_article_id').val();
        var article_title = $('#audit_form_source_article_title').val();
        var article_url = $('#audit_form_source_article_url').val();
        var article_tags = $('#audit_form_source_article_tags').val();
        var article_excerpt = $('#audit_form_source_article_excerpt').val();
        var audit_result = $('#audit_result').val();
        var audit_msg = $('#audit_form_msg').val();

        audit_top_article($(this),"audit_top_article", article_id, article_title, article_url, article_tags, article_excerpt, audit_result, audit_msg);
    });

    $("#group-topic-audit-btn").bind("click", function () {

        var id = $('#audit_form_group_topic_id').val();
        var title = $('#audit_form_group_topic_title').val();
        var tags = $('#audit_form_group_topic_tags').val();
        var content = $('#audit_form_group_topic_content').val();
        var audit_result = $('#audit_result').val();
        var audit_msg = $('#audit_form_msg').val();

        audit_group_topic($(this), id, title, tags, content, audit_result, audit_msg);
    });

    $("#group-set-hot-topic-btn").bind("click", function () {

        var post_id = $(this).attr("data-post-id");

        set_group_hot_topic($(this), post_id);
    });

    $("#resource-submit-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var catId = $('#submit_form_child_cat_id').val();
        var title = $('#submit_form_title').val();
        var tags = $('#submit_form_tags').val();
        var official_url = $('#submit_form_official_url').val();
        var open_source_url = $('#submit_form_open_source_url').val();
        var description = tinymce.activeEditor.getContent();

        submit_resource($(this), "submit_resource", catId, title, tags, official_url,open_source_url, description);
    });

    $("#date-submit-btn").bind("click", function () {

        var title = $('#submit_form_title').val();
        var email = $('#submit_form_email').val();
        var city = $('#submit_form_city').val();
        var details = $('#submit_form_details').val();

        submit_date($(this),"submit_date", title, email, city, details);
    });

    $("#get-date-contact-btn").bind("click", function(){

        var post_id = $(this).attr("data-post-id");

        get_date_contact($(this),'get_date_contact',post_id);
    });

    $("#group-topic-edit-submit-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var topic_id = $('#submit_form_topic_id').val();
        var topic_title = $('#submit_form_topic_title').val();
        var topic_tags = $('#submit_form_topic_tags').val();
        var topic_content = tinymce.activeEditor.getContent();

        edit_group_topic($(this),'edit_group_topic',topic_id,topic_title,topic_tags,topic_content);
    });

    $("#group-topic-submit-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var group_id = $('#submit_form_group_id').val();
        var topic_title = $('#submit_form_topic_title').val();
        var topic_tags = $('#submit_form_topic_tags').val();
        var topic_content = tinymce.activeEditor.getContent();

        submit_group_topic($(this),'submit_group_topic',group_id,topic_title,topic_tags,topic_content);
    });

    $("#group-topic-preview-md-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var md_text = tinymce.activeEditor.getContent();

        preview_md_text($(this),md_text);
    });

    $("#top-link-preview-md-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var md_text = tinymce.activeEditor.getContent();

        preview_md_text($(this),md_text);
    });

    $("#hao-resource-preview-md-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var md_text = tinymce.activeEditor.getContent();

        preview_md_text($(this),md_text);
    });

    $("#crawl-web-page-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var source_url = $('#source_article_url').val();

        crawl_web_page($(this),source_url);

    });

    $("#crawl-article-submit-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var article_data = {
            site_id: $('#submit_form_site_id').val(),
            cat_id: $('#submit_form_category_id').val(),
            cn_source: $('#submit_form_source_article_author').val(),
            cn_source_url: $('#submit_form_source_article_url').val(),
            en_source: $('#submit_form_en_source_article_author').val(),
            en_source_url: $('#submit_form_en_source_article_url').val(),
            title: $('#submit_form_article_title').val(),
            tags: $('#submit_form_article_tags').val(),
            excerpt: $('#submit_form_article_excerpt').val(),
            content: tinymce.activeEditor.getContent()
        };

        publish_crawl_article($(this),article_data);

    });

    $("#original-article-submit-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var article_data = {
            site_id: $('#submit_form_site_id').val(),
            cat_id: $('#submit_form_category_id').val(),
            en_source: $('#submit_form_en_source_article_author').val(),
            en_source_url: $('#submit_form_en_source_article_url').val(),
            title: $('#submit_form_article_title').val(),
            tags: $('#submit_form_article_tags').val(),
            excerpt: $('#submit_form_article_excerpt').val(),
            content: tinymce.activeEditor.getContent()
        };

        publish_original_article($(this),article_data);

    });

    $("#create-group-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var parent_group_id = $('#submit_form_parent_group_id').val();
        var group_name = $('#submit_form_group_name').val();
        var group_desc = $('#submit_form_group_desc').val();

        create_group($(this),'create_group',parent_group_id,group_name,group_desc);
    });

    $("#start-to-translate-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $('#start-to-translate-btn').attr("data-post-id");

        handle_translation(post_id, 'start_to_translate', $('#start-to-translate-btn'));
    });

    $("#finish-translation-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $('#finish-translation-btn').attr("data-post-id");

        handle_translation(post_id, 'finish_translation', $('#finish-translation-btn'));
    });

    $("#re-translate-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $('#re-translate-btn').attr("data-post-id");

        handle_translation(post_id, 're_translate', $('#re-translate-btn'));
    });

    $("#start-to-review-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $('#start-to-review-btn').attr("data-post-id");

        handle_translation(post_id, 'start_to_review_translation', $('#start-to-review-btn'));
    });

    $("#finish-review-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $('#finish-review-btn').attr("data-post-id");

        handle_translation(post_id, 'finish_translation_review', $('#finish-review-btn'));
    });

    $("#check-outdated-trans-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        handle_outdated_translation($('#check-outdated-trans-btn'));
    });

    $("#reward-good-suggestion-btn").bind("click", function () {

        var post_id = $(this).attr("data-post-id");

        reward_good_suggestion(post_id, $(this));
    });

    $("#reward-valid-bug-btn").bind("click", function () {

        var post_id = $(this).attr("data-post-id");

        reward_valid_bug(post_id, $(this));
    });

    $("#publish-to-home-btn").bind("click", function () {

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobbolehome', $(this));
    });

    $("#publish-to-top-btn").bind("click", function () {

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobboletopfromarticle', $(this));
    });

    $("#publish-to-blog-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobboleblog', $(this));
    });

    $("#publish-to-importnew-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'importnew', $(this));
    });

    $("#publish-to-design-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobboledesign', $(this));
    });

    $("#publish-to-webfront-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobbolewebfront', $(this));
    });

    $("#publish-to-python-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobbolepython', $(this));
    });

    $("#publish-to-ios-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobboleios', $(this));
    });

    $("#publish-to-android-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobboleandroid', $(this));
    });


    $("#recommend-to-top-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobboletopfromtrans', $(this));
    });

    $("#recommend-to-trans-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var post_id = $(this).attr("data-post-id");

        handle_publish_to_site(post_id, 'jobbolefanyi', $(this));
    });

    $("#check-duplicated-trans-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        handle_check_duplicated_trans($(this));
    });

    $("#change-pwd-form-btn").bind("click", function () {
        handle_change_pwd($(this),$('#change_password_form_curr_pwd'),$('#change_password_form_new_pwd'),$('#change_password_form_confirm_new_pwd'));
    });

    $('#change_password_form_new_pwd').blur(function(){
        if($(this).val() !=''){
            checkPassStrength($(this).val());
        }
    });

    $("#change-profile-social-btn").bind("click", function () {
        var socialData = {
            website: $('#change-profile-social-website').val(),
            weibo: $('#change-profile-social-weibo').val(),
            qq: $('#change-profile-social-qq').val(),
            weixin: $('#change-profile-social-weixin').val(),
            github: $('#change-profile-social-github').val(),
            stackoverflow: $('#change-profile-social-stackoverflow').val(),

            dribbble: $('#change-profile-social-dribbble').val(),
            behance: $('#change-profile-social-behance').val(),
            sitecool: $('#change-profile-social-sitecool').val(),
            uichina: $('#change-profile-social-uichina').val(),

            facebook: $('#change-profile-social-facebook').val(),
            twitter: $('#change-profile-social-twitter').val(),
            linkedin: $('#change-profile-social-linkedin').val(),
            google: $('#change-profile-social-google').val()
        }

        handle_change_profile_social($(this),socialData);
    });

    $("#change-profile-career-btn").bind("click", function () {
        var careerData = {
            job: $('#change-profile-career-job').val(),
            company: $('#change-profile-career-company').val(),
            title: $('#change-profile-career-title').val()
        }

        handle_change_profile_career($(this),careerData);
    });

    $("#change-profile-notice-btn").bind("click", function () {

        var notificationData = {
            pm: $('#change-profile-notice-pm:checked').val(),
            mention: $('#change-profile-notice-mention:checked').val(),
            commentN: $('#change-profile-notice-comment:checked').val(),
            notifyEmail: $('#change-profile-notice-email').val()
        }

        handle_change_profile_notice($(this),notificationData);
    });

    $('#change-profile-basic-display').blur(function(){
        if($(this).val() !='' && $(this).val() != $(this).attr('currValue')){
            checkDisplayName($(this).val());
        }else{
            var checkDisplayNameTip = jQuery('#change-profile-basic-display-tip');
            checkDisplayNameTip.html('');
            checkDisplayNameTip.hide();
        }
    });

    $("#change-profile-basic-btn").bind("click", function () {
        var basicData= {
            displayName: $('#change-profile-basic-display').val(),
            city: $('#change-profile-basic-city').val(),
            gender: $('#change-profile-basic-gender').val(),
            year: $('#change-profile-basic-birth-year').val(),
            month: $('#change-profile-basic-birth-month').val(),
            day: $('#change-profile-basic-birth-day').val(),
            desc: $('#change-profile-basic-desc').val()
        }

        handle_change_profile_basic($(this),basicData);
    });

    $(".bookmark-btn").bind("click", function () {

        if ($(this).hasClass("register-user-only")) {
            return false;
        }

        var bookmarkData= {
            bookType: $(this).attr('data-book-type'),
            siteId: $(this).attr('data-site-id'),
            itemId: $(this).attr('data-item-id'),
            itemType: $(this).attr('data-item-type')
        }

        handle_jb_bookmark($(this),bookmarkData);
    });

    $('.cmnt-box').hover(function(){
        $(this).find(".c-edit span").show();
    });

    $('.cmnt-box').mouseleave(function(){
        $(this).find(".c-edit span").hide();
    });

    $('.status-content').hover(function(){
        $(".show-when-hover").hide();
        $(this).find(".show-when-hover").show();
    });

    $('.send-private-message-btn').bind('click',function(){
        handle_send_pm($(this),$('#message-receiver-id').val(),$('#private-message').val());
    });

    $('.pm .member-follow-item').bind('click',function(){
        var pms_url = $(this).attr('data-pms-url');
        window.location = pms_url;
    });

    $('.follow-me').bind('click',function(){
        handle_follow_me($(this),$(this).attr('data-follow-user-id'),$(this).attr('data-follow-type'));
    });

    $('.unread').click(function(){
        $(this).removeClass('unread');
        read_message($(this).attr('message-id'));
    });

    $('.delete-message-link').click(function(){
        delete_message($(this),$(this).attr('message-id'));
    });

    $('#read_all_message').click(function(){
        read_all_message($(this));
    });

    $('#remove_all_message').click(function(){
        remove_all_message($(this));
    });

    $.fn.enterKey = function (fnc) {
        return this.each(function () {
            $(this).keypress(function (ev) {
                var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                if (keycode == '13') {
                    fnc.call(this, ev);
                }
            })
        })
    }

    $('.login-container input#jb_user_login, .login-container input#jb_user_pass').enterKey(function () {
        var user_login = $('#jb_user_login').val();
        var user_pass = $('#jb_user_pass').val();

        var remember_me = 1;
        if (!$('#remember_me').is(":checked")){
            remember_me = 0;
        }

        var redirect_url = $('#jb_login_redirect').val();

        jb_user_login($('#jb_user_login_btn'),user_login,user_pass,remember_me,redirect_url);
    })

    $('#jb_user_login_btn').click(function(){

        var user_login = $('#jb_user_login').val();
        var user_pass = $('#jb_user_pass').val();

        var remember_me = 1;
        if (!$('#remember_me').is(":checked")){
            remember_me = 0;
        }

        var redirect_url = $('#jb_login_redirect').val();

        jb_user_login($(this),user_login,user_pass,remember_me,redirect_url);
    });

    $('.register-container input#jb_user_login, .register-container input#jb_user_display_name, .register-container input#jb_user_email, .register-container input#jb_verify_code').enterKey(function () {
        var user_login = $('#jb_user_login').val();
        var user_display_name = $('#jb_user_display_name').val();
        var user_email = $('#jb_user_email').val();
        var verify_code = $('#jb_verify_code').val();

        jb_user_register($('#jb_user_register_btn'),user_login,user_display_name,user_email,verify_code);
    })

    $('#jb_reset_password_btn').click(function(){

        var user_email = $('#jb_user_email').val();
        var verify_code = $('#jb_verify_code').val();

        jb_reset_password($(this),user_email,verify_code);

    });


    $('#jb_user_register_btn').click(function(){

        var user_login = $('#jb_user_login').val();
        var user_display_name = $('#jb_user_display_name').val();
        var user_email = $('#jb_user_email').val();
        var verify_code = $('#jb_verify_code').val();

        jb_user_register($(this),user_login,user_display_name,user_email,verify_code);

    });

    $(".refresh-captcha-code").click(function() {
        var sourceUrl = $(this).attr("data-source-url");
        $(".captcha-code").attr("src",sourceUrl+"?r=" + Math.random());
    });

    $(".get-login-point-btn").click(function(){
        jb_get_login_point($(this));
    });

    $("#searchselect").bind('change',function(){
        $('#searchform').attr('action',$(this).val());
    });

    $(".set-essence-comment").bind("click",function(){
        var comment_id = $(this).attr("data-comm-id");
        jb_set_essence_comment($(this),comment_id);
    });

    $(".set-trusted-user").bind("click",function(){
        var user_id = $(this).attr("data-user-id");
        jb_set_user_status($(this),user_id,'trusted');
    });

    $(".set-normal-user").bind("click",function(){
        var user_id = $(this).attr("data-user-id");
        jb_set_user_status($(this),user_id,'normal');
    });

    $(".set-spammed-user").bind("click",function(){
        var user_id = $(this).attr("data-user-id");
        jb_set_user_status($(this),user_id,'spam');
    });

    load_top_message_menu_data();
});

function jb_set_user_status(btn,user_id,status){

    btn.text('设置中…');

    var reqData = {
        action: 'set_user_status',
        status: status,
        user_id: user_id
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {
            btn.html('设置成功');
        }else{
            btn.text(callbackData.jb_msg);
        }
    });
}

function jb_set_essence_comment(btn,comment_id){
    btn.text('授予中…');

    var reqData = {
        action: 'set_essence_comment',
        comment_id: comment_id
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {
            btn.html('已授予');
        }else{
            btn.text(callbackData.jb_msg);
        }
    });
}

function jb_get_login_point(btn){

    btn.text('…');

    var reqData = {
        action: 'get_login_point'
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {
            jQuery('#user_curr_points').text(callbackData.user_points);
            btn.html('已签到');
        }else{
            btn.text(callbackData.jb_msg);
        }
    });
}

function load_top_message_menu_data(){
    var reqData = {
        action: 'jb_load_unread_message_data_action'
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {

            if(callbackData.total_unread <= 0){

                jQuery( "#top-menu-total-unread").parent().parent().remove();
                jQuery( "#top-menu-total-unread-message" ).html('');
                jQuery( "#top-menu-total-unread-pm" ).html('');

            }else{

                jQuery( "#top-menu-total-unread" ).html(callbackData.total_unread);
                jQuery( "#top-menu-total-unread-message-s" ).html(callbackData.total_unread_message);
                jQuery( "#top-menu-total-unread-pm-s" ).html(callbackData.total_unread_pm);

                if(callbackData.total_unread_message > 0){
                    jQuery( "#top-menu-total-unread-message" ).html('（'+callbackData.total_unread_message+'）');
                }else{
                    jQuery( "#top-menu-total-unread-message" ).html('');
                }

                if(callbackData.total_unread_pm > 0){
                    jQuery( "#top-menu-total-unread-pm" ).html('（'+callbackData.total_unread_pm+'）');
                }else{
                    jQuery( "#top-menu-total-unread-pm" ).html('');
                }
            }
        }
    });
}

function read_all_message(btn){
    var reqData = {
        action: 'jb_read_all_message_action'
    }

    btn.html('处理中……');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {

            jQuery( "#all_message_list li" ).each(function( index ) {
                jQuery( this ).removeClass('unread').addClass('read');
            });

            load_top_message_menu_data();

            btn.html('已全部标为已读');
        }
    });
}

function remove_all_message(btn){
    var reqData = {
        action: 'jb_remove_all_message_action'
    }

    btn.html('正在清空……');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {

            jQuery("#all_message_list").hide(300);

            load_top_message_menu_data();

            btn.html('已全部清空');
        }
    });
}

function delete_message(btn,msgId){
    var reqData = {
        action: 'jb_del_message_action',
        msgId: msgId
    }

    btn.html('正在删除……');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {
            var messageId = '#message-id-'+btn.attr('message-id');
            jQuery(messageId).hide(300);

            load_top_message_menu_data();
        }
    });
}

function read_message(msgId){
    var reqData = {
        action: 'jb_read_message_action',
        msgId: msgId
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        load_top_message_menu_data();
    });
}

function handle_follow_me(btn,followerId,followType){
    var reqData = {
        action: 'jb_follow_action',
        followerId: followerId,
        followType: followType
    }

    btn.html('…');
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {
        btn.html(callbackData.jb_msg);
        btn.attr('data-follow-type',callbackData.jb_follow_type);
        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {
        btn.html('系统出错');
        btn.removeAttr('disabled');
    });
}

function handle_send_pm(btn,receverId,privateMsg){

    var reqData = {
        action: 'jb_send_pm_action',
        receiverId: receverId,
        privateMessage: privateMsg
    }

    var original_content = btn.html();
    btn.html('发送中');
    btn.attr('disabled', 'disabled');

    var pmMsgInput = jQuery('#private-message');
    var pmTip = jQuery('#pm-input-tip-area');
    pmTip.html('');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            pmTip.html(callbackData.jb_msg);
            pmMsgInput.val('');
            jQuery("#pms_list").prepend(callbackData.new_pms);
        }else{
            pmTip.html(callbackData.jb_msg);
        }

        btn.html(original_content);
        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {
        pmTip.html('系统出错，请稍后重试');

        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function handle_jb_bookmark(btn,bookmarkData){
    var reqData = {
        action: 'jb_bookmark',
        bookType: bookmarkData.bookType,
        siteId: bookmarkData.siteId,
        itemId: bookmarkData.itemId,
        itemType: bookmarkData.itemType
    }

    var original_content = btn.html();
    if(bookmarkData.bookType == -1){
        btn.html('取消中');
    }else{
        btn.html('收藏中');
    }
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {

            if(btn.attr('data-book-type') == -1){
                btn.attr('data-book-type',1);
            }else{
                btn.attr('data-book-type',-1);
            }

            btn.html(callbackData.jb_msg);
        }else{
            show_info_modal("友情提示", callbackData.jb_msg, "确定");
            btn.html(original_content);
        }

        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {
        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function jb_reset_password(btn,user_email,verify_code){

    var info_container = jQuery('#jb_reset_password_info');

    if (user_email == '' || verify_code == ''){
        info_container.css('color','red');
        info_container.html('注册邮箱和验证码都不能为空');
        return false;
    }

    info_container.html('');
    btn.text("正在提交…");
    btn.attr('disabled', 'disabled');

    var reqData = {
        action: 'user_reset_password',
        user_email: user_email,
        verify_code: verify_code
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            btn.text('成功提交');
            info_container.css('color','green');
            info_container.html(callbackData.jb_msg);

        }else if(callbackData.jb_result == 100002){
            info_container.css('color','red');
            info_container.html(callbackData.jb_msg);
            btn.text('提交');
            btn.removeAttr('disabled');

            var sourceUrl = jQuery(".captcha-code").attr("data-source-url");
            jQuery(".captcha-code").attr("src",sourceUrl+"?r=" + Math.random());

        }else{
            info_container.css('color','red');
            info_container.html(callbackData.jb_msg);
            btn.text('提交');
            btn.removeAttr('disabled');

            var sourceUrl = jQuery(".captcha-code").attr("data-source-url");
            jQuery(".captcha-code").attr("src",sourceUrl+"?r=" + Math.random());
        }

    });

    ajaxSubmitReq.fail(function (d, c) {
        info_container.css('color','red');
        info_container.html('系统发生错误');
        btn.text('提交');
        btn.removeAttr('disabled');
    });
}

function jb_user_register(btn,user_login,user_display_name,user_email,verify_code){

    var info_container = jQuery('#jb_user_login_info');

    if (user_login == '' || user_display_name == '' || user_email == '' || verify_code == ''){
        info_container.css('color','red');
        info_container.html('用户名、昵称、邮箱和验证码都不能为空');
        return false;
    }

    info_container.html('');
    btn.text("正在注册…");
    btn.attr('disabled', 'disabled');

    var reqData = {
        action: 'user_register',
        user_login: user_login,
        display_name: user_display_name,
        user_email: user_email,
        verify_code: verify_code
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            btn.text('注册成功');
            info_container.css('color','green');
            info_container.html(callbackData.jb_msg);

            setTimeout(function(){
                window.location.href = callbackData.jb_redirect_url;
            }, 3000);

        }else if(callbackData.jb_result == 100002){
            info_container.css('color','red');
            info_container.html(callbackData.jb_msg);
            btn.text('注册');
            btn.removeAttr('disabled');

            var sourceUrl = jQuery(".captcha-code").attr("data-source-url");
            jQuery(".captcha-code").attr("src",sourceUrl+"?r=" + Math.random());

        }else{
            info_container.css('color','red');
            info_container.html(callbackData.jb_msg);
            btn.text('注册');
            btn.removeAttr('disabled');

            var sourceUrl = jQuery(".captcha-code").attr("data-source-url");
            jQuery(".captcha-code").attr("src",sourceUrl+"?r=" + Math.random());
        }

    });

    ajaxSubmitReq.fail(function (d, c) {
        info_container.css('color','red');
        info_container.html('系统发生错误');
        btn.text('注册');
        btn.removeAttr('disabled');
    });
}

function jb_user_login(btn,user_login,user_pass,remember_me,redirect_url){

    console.log(remember_me);

    var info_container = jQuery('#jb_user_login_info');
    info_container.css('color','red');

    if (user_login == '' || user_pass == ''){
        info_container.html('用户名和密码不能为空');
        return false;
    }

    btn.text("正在登录…");
    btn.attr('disabled', 'disabled');

    var reqData = {
        action: 'user_login',
        user_login: user_login,
        user_pass: user_pass,
        remember_me: remember_me,
        redirect_url: redirect_url
    }


    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            btn.text(callbackData.jb_msg);
            window.location.href = callbackData.jb_redirect_url;
        }else{
            info_container.html(callbackData.jb_msg);
            btn.text('登录');
            btn.removeAttr('disabled');
        }

    });

    ajaxSubmitReq.fail(function (d, c) {
        info_container.html('系统发生错误');
        btn.text('登录');
        btn.removeAttr('disabled');
    });
}

function handle_change_profile_basic(btn,basicData){
    var changeProfileBasicTip = jQuery('#change_profile_basic_tip');
    changeProfileBasicTip.hide();

    var reqData = {
        action: 'change_profile_basic',
        diaplayName: basicData.displayName,
        city: basicData.city,
        gender: basicData.gender,
        year: basicData.year,
        month: basicData.month,
        day: basicData.day,
        desc: basicData.desc
    }

    var original_content = btn.html();
    btn.text("正在保存…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        changeProfileBasicTip.show();

        if (callbackData.jb_result != 0) {
            changeProfileBasicTip.css('color','red');
        }else{
            changeProfileBasicTip.css('color','green');
        }

        changeProfileBasicTip.html(callbackData.jb_msg);
        btn.html(original_content);
        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {

        changeProfileBasicTip.show();
        changeProfileBasicTip.css('color','red');
        changeProfileBasicTip.html('系统错误，请稍后重试。');
        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function checkDisplayName(userDisplayName){
    var checkDisplayNameTip = jQuery('#change-profile-basic-display-tip');
    checkDisplayNameTip.css('color','');
    checkDisplayNameTip.html('正在检测是否被占用……');
    checkDisplayNameTip.show();

    var reqData = {
        action: 'check_profile_display',
        diaplayName: userDisplayName
    }

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result != 1) {

            if (callbackData.jb_result != 0) {
                checkDisplayNameTip.css('color','red');
            }else{
                checkDisplayNameTip.css('color','green');
            }

            checkDisplayNameTip.show();
            checkDisplayNameTip.html(callbackData.jb_msg);
        }
    });

    ajaxSubmitReq.fail(function (d, c) {

        checkDisplayNameTip.show();
        checkDisplayNameTip.css('color','red');
        checkDisplayNameTip.html('系统错误，请稍后重试。');
    });
}

function handle_change_profile_notice(btn,noticeData){
    var changeProfileNoticeTip = jQuery('#change_profile_notice_tip');
    changeProfileNoticeTip.hide();

    var reqData = {
        action: 'change_profile_notice',
        pm: noticeData.pm,
        mention: noticeData.mention,
        comment: noticeData.commentN,
        notifyEmail: noticeData.notifyEmail
    }

    var original_content = btn.html();
    btn.text("正在保存…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        changeProfileNoticeTip.show();

        if (callbackData.jb_result != 0) {
            changeProfileNoticeTip.css('color','red');
        }else{
            changeProfileNoticeTip.css('color','green');
        }

        changeProfileNoticeTip.html(callbackData.jb_msg);
        btn.html(original_content);
        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {

        changeProfileNoticeTip.show();
        changeProfileNoticeTip.css('color','red');
        changeProfileNoticeTip.html('系统错误，请稍后重试。');
        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function handle_change_profile_career(btn,careerData){
    var changeProfileCareerTip = jQuery('#change_profile_career_tip');
    changeProfileCareerTip.hide();

    var reqData = {
        action: 'change_profile_career',
        job: careerData.job,
        company: careerData.company,
        title: careerData.title
    }

    var original_content = btn.html();
    btn.text("正在保存…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        changeProfileCareerTip.show();

        if (callbackData.jb_result != 0) {
            changeProfileCareerTip.css('color','red');
        }else{
            changeProfileCareerTip.css('color','green');
        }

        changeProfileCareerTip.html(callbackData.jb_msg);
        btn.html(original_content);
        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {

        changeProfileCareerTip.show();
        changeProfileCareerTip.css('color','red');
        changeProfileCareerTip.html('系统错误，请稍后重试。');
        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function handle_change_profile_social(btn,socialData){

    var changeProfileSocialTip = jQuery('#change_profile_social_tip');
    changeProfileSocialTip.hide();

    var reqData = {
        action: 'change_profile_social',
        website: socialData.website,
        weibo: socialData.weibo,
        qq: socialData.qq,
        weixin: socialData.weixin,
        github: socialData.github,
        stackoverflow: socialData.stackoverflow,
        dribbble: socialData.dribbble,
        behance: socialData.behance,
        sitecool: socialData.sitecool,
        uichina: socialData.uichina,
        facebook: socialData.facebook,
        twitter: socialData.twitter,
        linkedin: socialData.linkedin,
        google: socialData.google
    }

    var original_content = btn.html();
    btn.text("正在保存…");
    btn.attr('disabled', 'disabled');


    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        changeProfileSocialTip.show();

        if (callbackData.jb_result != 0) {
            changeProfileSocialTip.css('color','red');
        }else{
            changeProfileSocialTip.css('color','green');
        }

        changeProfileSocialTip.html(callbackData.jb_msg);
        btn.html(original_content);
        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {

        changeProfileSocialTip.show();
        changeProfileSocialTip.css('color','red');
        changeProfileSocialTip.html('系统错误，请稍后重试。');
        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function checkPassStrength(pass) {

    var score = scorePassword(pass);
    var tipInfoColor = '';
    var pwdLevel = '';
    if (score > 80){
        tipInfoColor =  "forestgreen";
        pwdLevel = '强';
    }else if (score > 60){
        tipInfoColor =  "forestgreen";
        pwdLevel = '一般';
    }else if (score >= 30){
        tipInfoColor =  "red";
        pwdLevel = '弱';
    }else{
        tipInfoColor =  "red";
        pwdLevel = '不合格';
    }

    var pwdTip = jQuery('#change_password_form_pwd_tip');

    pwdTip.show();
    pwdTip.css("color",tipInfoColor);
    pwdTip.html("密码安全级别："+pwdLevel);
}

function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    if(pass.length < 7)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass)
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

function handle_change_pwd(btn,currPwd,newPwd,confirmPwd){

    var changePwdTip = jQuery('#change_password_form_tip');
    changePwdTip.hide();

    if(scorePassword(newPwd.val()) < 30){
        changePwdTip.css('color','red');
        changePwdTip.html('密码不合格。');
        changePwdTip.show();

        return;
    }

    if(newPwd.val() != confirmPwd.val()){
        changePwdTip.css('color','red');
        changePwdTip.html('两次输入的新密码不相同。');
        changePwdTip.show();

        return;
    }

    var reqData = {
        action: 'change_password',
        curr_pwd: currPwd.val(),
        new_pwd: newPwd.val(),
        confirm_pwd: confirmPwd.val()
    }

    var original_content = btn.html();
    btn.text("正在修改…");
    btn.attr('disabled', 'disabled');


    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        changePwdTip.show();

        if (callbackData.jb_result != 0) {
            changePwdTip.css('color','red');
        }else{
            changePwdTip.css('color','green');
            currPwd.val('');
            newPwd.val('');
            confirmPwd.val('');
        }

        changePwdTip.html(callbackData.jb_msg);
        btn.html(original_content);
        btn.removeAttr('disabled');
    });

    ajaxSubmitReq.fail(function (d, c) {

        changePwdTip.show();
        changePwdTip.css('color','red');
        changePwdTip.html('系统错误，请稍后重试。');
        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function handle_check_duplicated_trans(btn) {
    var reqData = {
        action: 'check_duplicated_trans'
    }

    var original_content = btn.html();
    btn.text("正在检测…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: reqData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        show_info_modal("检测结果", callbackData.jb_msg, "确定");
        btn.html(original_content);
        btn.removeAttr('disabled');

    });

    ajaxSubmitReq.fail(function (d, c) {
        show_info_modal("系统错误", '检测时出现未知错误 :( ', "确定");

        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function reward_good_suggestion(post_id, btn){

    var rewardData = {
        action: 'reward_good_suggestion',
        post_id: post_id
    }

    btn.text("正在奖励…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: rewardData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            btn.text("成功");
            location.reload();
        }else{
            btn.text(callbackData.jb_msg);
        }

    });
}

function reward_valid_bug(post_id, btn){

    var rewardData = {
        action: 'reward_valid_bug',
        post_id: post_id
    }

    btn.text("正在奖励…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: rewardData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            btn.text("成功");
            location.reload();
        }else{
            btn.text(callbackData.jb_msg);
        }

    });
}

function handle_publish_to_site(post_id, target_site, btn) {

    var articleData = {
        action: 'publish_to_site',
        post_id: post_id,
        target_site: target_site
    }

    var original_content = btn.html();
    btn.text("正在发布…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: articleData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            btn.text("成功提交");
            location.reload();
        } else {
            if (callbackData.jb_msg != "") {
                //show_info_modal("发布结果", callbackData.jb_msg, "确定");
                console.log(callbackData.jb_msg);
            }
            btn.html(original_content);
            btn.removeAttr('disabled');
        }
    });

    ajaxSubmitReq.fail(function (d, c) {
        //show_info_modal("系统错误", "发布过程中遇到未知错误 :(", "确定");
        console.log("发布过程中遇到未知错误 :(");
        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function handle_translation(post_id, action_name, btn) {
    var articleData = {
        action: action_name,
        post_id: post_id
    }

    var original_content = btn.html();
    btn.text("正在提交…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: articleData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            btn.text("成功提交");
            location.reload();
        } else {
            if (callbackData.jb_msg != "") {
                show_info_modal("提交结果", callbackData.jb_msg, "确定");
            }
            btn.html(original_content);
            btn.removeAttr('disabled');
        }
    });

    ajaxSubmitReq.fail(function (d, c) {
        show_info_modal("系统错误", "发布过程中遇到未知错误 :(", "确定");

        btn.html(original_content);
        btn.removeAttr('disabled');
    });
}

function recommend_trans_article(btn,action_name, title, url, tags, excerpt){
    if (title === '' || url == '' || excerpt === '') {
        alert("请填写标题、链接和摘要");
    } else if (title.length > 200 || url.length > 200 || tags.length > 100 || excerpt.length > 1000) {
        alert("标题、摘要、标签或者地址超长");
    } else {
        var articleData = {
            action: action_name,
            article_title: title,
            article_url: url,
            article_tags: tags,
            article_excerpt: excerpt
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#article-submit-loading').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: articleData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            $('#article-submit-loading').hide();

            if (callbackData.jb_result == 0) {
                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_trans_url;
            }else{
                $('#article-submit-tips').show();
                $('#article-submit-tips').html(callbackData.jb_msg);
                btn.text("提交");
                btn.removeAttr('disabled');
            }
        });

        ajaxSubmitReq.fail(function (d, c) {
            $('#article-submit-loading').hide();

            $('#article-submit-tips').show();
            $('#article-submit-tips').html('系统错误，请稍后重试。');

            btn.text("重新提交");
            btn.removeAttr('disabled');
        });
    }
}

function handle_outdated_translation(btn){

    btn.text("正在检测…");
    btn.attr('disabled', 'disabled');

    var checkData = {
        action: 'check_outdated_translation_and_review'
    }

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: checkData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if(callbackData.jb_result == 0){
            btn.text(callbackData.jb_msg);
        }else{
            btn.text('已通知和回收超时翻译与校稿');
            btn.removeAttr('disabled');
        }
    });

    ajaxSubmitReq.fail(function (d, c) {
        btn.text('系统出错，请稍后重试');
        btn.removeAttr('disabled');
    });
}

function audit_trans_article(btn,action_name, id, title, url, tags, excerpt, audit_result, audit_msg){

    if (title === '' || url === '' || excerpt === '') {
        alert("请填写标题、地址和摘要");
    } else if (title.length > 100 || url.length > 200 || tags.length > 200 || excerpt.length > 1000) {
        alert("标题、摘要、标签或者地址超长");
    } else {
        var articleData = {
            action: action_name,
            article_id: id,
            article_title: title,
            article_url: url,
            article_tags: tags,
            article_excerpt: excerpt,
            audit_result: audit_result,
            audit_msg: audit_msg
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#article-audit-loading').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: articleData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            $('#article-audit-loading').hide();

            if(callbackData.jb_result == 0){
                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_trans_url;
            }else{
                btn.text('提交');
                btn.removeAttr('disabled');

                $('#article-audit-tips').show();
                $('#article-audit-tips').html(callbackData.jb_msg);
            }
        });

        ajaxSubmitReq.fail(function (d, c) {
            $('#article-audit-loading').hide();

            $('#article-submit-tips').html('系统错误，请稍后重试。');
            btn.text("重新提交");
            btn.removeAttr('disabled');
        });
    }
}

function submit_resource(btn,action_name, catId, title, tags, official_url,open_source_url, description){
    if (title === '' || description === '') {
        alert("请填写标题和描述");
    } else if (title.length > 100 || tags.length > 100 || official_url.length > 200 || open_source_url.length > 200 || description.length > 5000) {
        alert("标题、标签、官网地址、GitHub地址或者简介超长");
    } else {
        var resourceData = {
            action: action_name,
            cat_id: catId,
            title: title,
            tags: tags,
            official_url: official_url,
            open_source_url: open_source_url,
            description: description
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#resource-submit-loading').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: resourceData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {
            $('#resource-submit-loading').hide();

            if (callbackData.jb_result == 0) {
                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_res_url;
            }else{
                $('#resource-submit-tips').show();
                $('#resource-submit-tips').html(callbackData.jb_msg);

                btn.text("重新提交");
                btn.removeAttr('disabled');
            }
        });

        ajaxSubmitReq.fail(function (d, c) {
            $('#resource-submit-loading').hide();

            $('#resource-submit-tips').show();
            $('#resource-submit-tips').html('系统出错，请稍后重试');

            btn.text("重新提交");
            btn.removeAttr('disabled');
        });
    }
}

function audit_top_article(btn,action_name, id, title, url, tags, excerpt, audit_result, audit_msg){

    if (title === '' || excerpt === '') {
        alert("请填写标题和摘要");
    } else if (title.length > 100 || url.length > 200 || tags.length > 200 || excerpt.length > 10000) {
        alert("标题、摘要、标签或者地址超长");
    } else {
        var articleData = {
            action: action_name,
            article_id: id,
            article_title: title,
            article_url: url,
            article_tags: tags,
            article_excerpt: excerpt,
            audit_result: audit_result,
            audit_msg: audit_msg
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#article-audit-loading').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: articleData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            $('#article-submit-loading').hide();

            if (callbackData.jb_result == 0) {
                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_top_url;
            }else{
                $('#article-submit-tips').show();
                $('#article-submit-tips').html(callbackData.jb_msg);
                btn.text("重新提交");
                btn.removeAttr('disabled');
            }

        });

        ajaxSubmitReq.fail(function (d, c) {

            $('#article-submit-tips').show();
            $('#article-submit-tips').html('系统错误，请稍后重试。');
            btn.text("重新提交");
            btn.removeAttr('disabled');
            $('#article-submit-loading').hide();
        });
    }
}

function submit_top_article(btn,action_name, title, url, tags, excerpt) {
    if (title === '' || excerpt === '') {
        alert("请填写标题和摘要");
    } else if (title.length > 100 || url.length > 200 || tags.length > 200 || excerpt.length > 10000) {
        alert("标题、摘要、标签或者地址超长");
    } else {
        var articleData = {
            action: action_name,
            article_title: title,
            article_url: url,
            article_tags: tags,
            article_excerpt: excerpt
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#article-submit-loading').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: articleData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            $('#article-submit-loading').hide();

            if (callbackData.jb_result == 0) {
                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_top_url;
            }else{
                $('#article-submit-tips').show();
                $('#article-submit-tips').html(callbackData.jb_msg);
                btn.text("重新提交");
                btn.removeAttr('disabled');
            }
        });

        ajaxSubmitReq.fail(function (d, c) {
            $('#article-submit-tips').show();
            $('#article-submit-tips').html('系统错误，请稍后重试。');
            btn.text("重新提交");
            btn.removeAttr('disabled');
            $('#article-submit-loading').hide();
        });
    }
}

function vote_post_up_ajax(btn,action_name,curr_post_id){

    var voteData = {
        action: action_name,
        post_id: curr_post_id
    };

    var original_content = btn.html();
    btn.html('...');
    btn.attr('disabled', 'disabled');

    var ajaxVoteReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: voteData,
        dataType: "json"
    });

    ajaxVoteReq.done(function (callbackData) {

        btn.html(original_content);

        if (callbackData.jb_result == "0") {

            var voted_post_id = callbackData.post_id;
            var vote_total = callbackData.vote_total;

            jQuery('#' + voted_post_id + "votetotal").text(vote_total);

        }else{
            show_info_modal("友情提示", callbackData.jb_msg, "确定");
        }
    });

    ajaxVoteReq.fail(function (d, c) {
        btn.html(original_content);
        show_info_modal("友情提示", "系统没有响应，请稍后重试。", "确定");
    });
}

function vote_comment_ajax(btn,comment_id, up_or_down) {

    var voteData = {
        action: "vote_comment_action",
        comment_id: comment_id,
        up_or_down: up_or_down
    };

    var original_content = btn.html();
    btn.html('...');
    btn.attr('disabled', 'disabled');

    var ajaxVoteReq = jQuery.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: voteData,
        dataType: "json"
    });

    ajaxVoteReq.done(function (callbackData) {

        btn.html(original_content);

        var voted_comment_id = callbackData.comment_id;
        var vote_up_total = callbackData.vote_up_total;
        var vote_down_total = callbackData.vote_down_total;

        jQuery('#' + voted_comment_id + "voteuptotal").text(vote_up_total);
        jQuery('#' + voted_comment_id + "voteuptotal").parent().removeClass("t-up");

        jQuery('#' + voted_comment_id + "votedowntotal").text(vote_down_total);
        jQuery('#' + voted_comment_id + "votedowntotal").parent().removeClass("t-down");

        jQuery('.' + voted_comment_id + "voteflag").addClass("voted");

        if (callbackData.jb_result != 0) {
            show_info_modal("友情提示", callbackData.jb_msg, "确定");
        }
    });

    ajaxVoteReq.fail(function (d, c) {
        btn.html(original_content);
        show_info_modal("友情提示", "系统没有响应，请稍后重试或联系我们。", "确定");
    });

    return true

}


function favorite_post() {
    var curr_post_id = $(this).attr("data-post-id");

    if ($(this).hasClass("register-user-only")) {
        return false;
    }

    $(this).find(".loading-flag").show();

    ajax_favorite_post(curr_post_id, "favorite_post");
}

function cancel_favorite_post() {
    var curr_post_id = $(this).attr("data-post-id");

    if ($(this).hasClass("register-user-only")) {
        return false;
    }

    $(this).find(".loading-flag").show();

    ajax_favorite_post(curr_post_id, "cancel_favorite_post");
}

function ajax_favorite_post(postID, actionName) {
    if (postID == "" || postID < 1) {
        return false;
    }

    var postData = {
        action: actionName,
        post_id: postID
    };

    var ajaxFavoriteReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: postData,
        dataType: "json"
    });

    ajaxFavoriteReq.done(function (callbackData) {
        if (callbackData.favorite_msg == 1) {

            if (actionName == "cancel_favorite_post") {

                if ($("#my_favorite_" + callbackData.post_id)) {
                    $("#my_favorite_" + callbackData.post_id).hide(500);
                }

                if ($("#favorite_post_link_" + callbackData.post_id)) {
                    var favorite_post_link = $("#favorite_post_link_" + callbackData.post_id);
                    favorite_post_link.find(".loading-flag").hide();
                    favorite_post_link.removeClass("cancel-favorite-post");
                    favorite_post_link.addClass("favorite-post");

                    var loadingImageSrc = favorite_post_link.find(".loading-flag").attr('src');
                    favorite_post_link.html("<i class='glyphicon glyphicon-star-empty'></i>收藏  <img class='loading-flag' src='" + loadingImageSrc + "' />");

                    favorite_post_link.unbind("click");
                    favorite_post_link.bind("click", favorite_post);
                }

            } else {

                if ($("#favorite_post_link_" + callbackData.post_id)) {
                    var favorite_post_link = $("#favorite_post_link_" + callbackData.post_id);
                    favorite_post_link.find(".loading-flag").hide();
                    favorite_post_link.removeClass("favorite-post");
                    favorite_post_link.addClass("cancel-favorite-post");

                    var loadingImageSrc = favorite_post_link.find(".loading-flag").attr('src');
                    favorite_post_link.html("<i class='glyphicon glyphicon-star'></i>已收藏  <img class='loading-flag' src='" + loadingImageSrc + "' />");

                    favorite_post_link.unbind("click");
                    favorite_post_link.bind("click", cancel_favorite_post);
                }

            }
        }
        else {
            show_info_modal("友情提示", callbackData.jb_msg, "确定");
        }
    });

    ajaxFavoriteReq.fail(function (d, c) {
    });

    return true;
}

function ajax_unfollow_topic(topic_slug) {
    if (topic_slug == "") {
        return false;
    }

    var topicData = {
        action: "unfollow_topic",
        topic_id: topic_slug
    };

    var ajaxFollowTopicReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: topicData,
        dataType: "json"
    });

    ajaxFollowTopicReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {
            $('.unfollow-topic').hide();
            $('.follow-topic').show();

            $('.follow-topic-btn').show();
            $('.submit-link-btn').hide();
        }
        else {
            show_info_modal("友情提示", callbackData.jb_msg, "确定");
        }
    });

    ajaxFollowTopicReq.fail(function (d, c) {
    });

    return true;
}

function ajax_follow_topic(topic_slug) {
    if (topic_slug == "") {
        return false;
    }

    var topicData = {
        action: "follow_topic",
        topic_id: topic_slug
    };

    var ajaxFollowTopicReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: topicData,
        dataType: "json"
    });

    ajaxFollowTopicReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {
            $('.unfollow-topic').show();
            $('.follow-topic').hide();

            $('.follow-topic-btn').hide();
            $('.submit-link-btn').show();

        } else {
            show_info_modal("友情提示", callbackData.jb_msg, "确定");
        }
    });

    ajaxFollowTopicReq.fail(function (d, c) {
    });

    return true;
}

/** Date */
function get_date_contact(btn,action_name,postId){
    var dateData = {
        action: action_name,
        postId: postId
    }

    var originalText = btn.text();
    btn.text("正在查询…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: dateData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            $('#get-date-contact-container').html(callbackData.jb_contact_email);
        }else{
            btn.hide();
            $('#get-date-contact-tip').html(callbackData.jb_msg);
        }
    });

    ajaxSubmitReq.fail(function (d, c) {
        btn.text("系统出错，请稍后重试");
        btn.removeAttr('disabled');
    });
}

function submit_date(btn, action_name, title, email, city, details){

    var topicData = {
        action: action_name,
        title: title,
        email: email,
        city: city,
        details: details
    }

    btn.text("正在提交…");
    btn.attr('disabled', 'disabled');
    $('#date-submit-loading').show();
    $('#date-submit-tips').show();

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: topicData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        $('#date-submit-loading').hide();

        if (callbackData.jb_result == 0) {

            btn.text(callbackData.jb_msg);
            window.location.href = callbackData.jb_object_url;

        }else{
            btn.text("重新提交");
            btn.removeAttr('disabled');

            var submitTips = $('#date-submit-tips');
            submitTips.show();
            submitTips.html(callbackData.jb_msg);
        }
    });

    ajaxSubmitReq.fail(function (d, c) {

        $('#date-submit-loading').hide();

        var submitTips = $('#date-submit-tips');
        submitTips.show();
        submitTips.html('系统出错，提交失败');

        btn.text("重新提交");
        btn.removeAttr('disabled');

    });
}

function htmlEncode(value){
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
}

function htmlDecode(value){
    return $('<div/>').html(value).text();
}

function publish_original_article(btn, article_data){

    var articleData = {
        action: 'publish_original_article',
        site_id: article_data.site_id,
        cat_id: article_data.cat_id,
        en_source: article_data.en_source,
        en_source_url: article_data.en_source_url,
        title: article_data.title,
        tags: article_data.tags,
        excerpt: htmlEncode(article_data.excerpt),
        content:  htmlEncode(article_data.content)
    }

    btn.text("正在提交…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: articleData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {

            btn.text("成功提交");
            $('#article-submit-tips').html(callbackData.jb_msg);

        }else{

            $('#article-submit-tips').html(callbackData.jb_msg);
            btn.text("重新提交");
            btn.removeAttr('disabled');
        }

    });
}

function publish_crawl_article(btn, article_data){

    var crawlData = {
        action: 'publish_crawl_article',
        site_id: article_data.site_id,
        cat_id: article_data.cat_id,
        cn_source: article_data.cn_source,
        cn_source_url: article_data.cn_source_url,
        en_source: article_data.en_source,
        en_source_url: article_data.en_source_url,
        title: article_data.title,
        tags: article_data.tags,
        excerpt: htmlEncode(article_data.excerpt),
        content:  htmlEncode(article_data.content)
    }

    btn.text("正在发布…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: crawlData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {

            btn.text("已发布");
            $('#article-submit-tips').html(callbackData.jb_msg);
        }else{
            $('#article-submit-tips').html(callbackData.jb_msg);
            btn.text("重新发布");
            btn.removeAttr('disabled');
        }

    });

}

function load_categories(selectId,siteId,parentCatId){

    var select = document.getElementById(selectId);
    var optionLength = select.options.length;
    for (var i = 0; i < optionLength; i++) {
        select.options.remove(0);
    }

    var opt = document.createElement('option');
    opt.value = -1;
    opt.innerHTML = '刷新中……';
    select.appendChild(opt);

    $('#'+selectId).selectpicker('refresh');

    var CatData = {
        action: 'load_category_data',
        siteId: siteId,
        parentCatId: parentCatId
    };

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: CatData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {

            select.options.remove(0);

            if(callbackData.category_string != ''){
                var category_data = callbackData.category_string.split(';');
                for(var i=0; i<category_data.length; i++){

                    if(category_data[i] != ''){
                        var single_cat = category_data[i].split(',');
                        var opt = document.createElement('option');

                        opt.value = single_cat[0];
                        opt.innerHTML = single_cat[1];

                        select.appendChild(opt);
                    }

                }

                $('#'+selectId).selectpicker('refresh');
            }

            $('#'+selectId).selectpicker('refresh');
        }
    });

}

function crawl_web_page(btn, source_url){
    if(source_url === ''){
        alert('网址不能为空');
    }else{

        var crawlData = {
            action: 'crawl_article',
            source: source_url
        };

        btn.text("正在抓取网页…");
        btn.attr('disabled', 'disabled');

        $('#submit_form_source_article_author').val('');
        $('#submit_form_source_article_url').val('');
        $('#submit_form_en_source_article_author').val('');
        $('#submit_form_en_source_article_url').val('');
        $('#submit_form_article_title').val('');
        $('#submit_form_article_tags').val('');
        $('#submit_form_article_excerpt').val('');
        $('#submit_form_article_content').html('文章内容（可修改）');
        $('#article-submit-tips').html('');
        $('#article-crawl-tips').html('');
        $('#crawl-article-submit-btn').text('提交文章');
        $('#crawl-article-submit-btn').removeAttr('disabled');

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: crawlData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            btn.text("重新抓取");
            btn.removeAttr('disabled');

            if (callbackData.jb_result == 0) {
                $('#submit_form_source_article_url').val(callbackData.article_url);
                $('#submit_form_article_title').val(callbackData.article_title);
                $('#submit_form_article_excerpt').val(callbackData.article_excerpt);

                tinyMCE.activeEditor.setContent(callbackData.article_content);

            }else{
                $('#article-crawl-tips').html(callbackData.jb_msg);
            }

        });
    }
}

function preview_md_text(btn, md_text){

    if(md_text === ''){
        alert('内容不能为空');
    }else{

        var topicData = {
            action: 'preview_md',
            md_text: md_text
        };

        btn.text("正在提交预览…");
        btn.attr('disabled', 'disabled');
        var previewArea = $('#preview-md-container');
        previewArea.html('预览中……');

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: topicData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            btn.text("重新预览");
            btn.removeAttr('disabled');

            previewArea.show();

            if (callbackData.jb_result == 0) {
                previewArea.html(callbackData.jb_msg);
            }else{
                if(callbackData.jb_msg != ''){
                    previewArea.html(callbackData.jb_msg);
                }else{
                    previewArea.html('预览失败，请重新提交');
                }
            }

        });

    }
}

/** Group */
function edit_group_topic(btn, action_name, topicId, title, tags, content){

    if (topicId == '' || title === '') {
        alert("标题不能为空");
    }else{

        var topicData = {
            action: action_name,
            topicId: topicId,
            title: title,
            tags: tags,
            content: content
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#article-submit-loading').show();
        $('#group-topic-submit-tips').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: topicData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            $('#article-submit-loading').hide();

            if (callbackData.jb_result == 0) {
                $('#submit_form_topic_title').val('');
                $('#submit_form_topic_tags').val('');
                $('#submit_form_topic_content').val('');

                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_topic_url;

            }else{
                btn.text("重新提交");
                btn.removeAttr('disabled');

                var submitTips = $('#group-topic-submit-tips');
                submitTips.show();
                submitTips.html(callbackData.jb_msg);
            }

        });

        ajaxSubmitReq.fail(function (d, c) {

            $('#article-submit-loading').hide();

            var submitTips = $('#group-topic-submit-tips');
            submitTips.show();
            submitTips.html('系统出错，提交失败');

            btn.text("重新提交");
            btn.removeAttr('disabled');

        });
    }
}

function submit_group_topic(btn, action_name, groupId, title, tags, content) {
    if (groupId == '' || title === '') {
        alert("标题不能为空");
    }else{

        var topicData = {
            action: action_name,
            groupId: groupId,
            title: title,
            tags: tags,
            content: content
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#article-submit-loading').show();
        $('#group-topic-submit-tips').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: topicData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            $('#article-submit-loading').hide();

            if (callbackData.jb_result == 0) {
                $('#submit_form_topic_title').val('');
                $('#submit_form_topic_tags').val('');
                $('#submit_form_topic_content').val('');

                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_topic_url;

            }else{
                btn.text("重新提交");
                btn.removeAttr('disabled');

                var submitTips = $('#group-topic-submit-tips');
                submitTips.show();
                submitTips.html(callbackData.jb_msg);
            }

        });

        ajaxSubmitReq.fail(function (d, c) {

            $('#article-submit-loading').hide();

            var submitTips = $('#group-topic-submit-tips');
            submitTips.show();
            submitTips.html('系统出错，提交失败');

            btn.text("重新提交");
            btn.removeAttr('disabled');

        });
    }
}

function set_group_hot_topic(btn,postId){

    var topicData = {
        action: 'set_group_hot_topic',
        id: postId
    }

    btn.text("正在提交…");
    btn.attr('disabled', 'disabled');

    var ajaxSubmitReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: topicData,
        dataType: "json"
    });

    ajaxSubmitReq.done(function (callbackData) {

        if (callbackData.jb_result == 0) {
            $('#group-set-hot-topic-btn').text(callbackData.jb_msg);
            window.location.href = callbackData.jb_topic_url;
        }else{
            $('#group-set-hot-topic-btn').text(callbackData.jb_msg);
            $('#group-set-hot-topic-btn').removeAttr('disabled');
        }
    });

    ajaxSubmitReq.fail(function (d, c) {

        $('#group-set-hot-topic-btn').text("重新提交");
        $('#group-set-hot-topic-btn').removeAttr('disabled');
    });
}

function audit_group_topic(btn,id, title, tags, excerpt, audit_result, audit_msg){

    if (title === '') {
        alert("标题不能为空");
    } else if (title.length > 200 || excerpt.length > 10000) {
        alert("标题或内容超长");
    } else {
        var articleData = {
            action: 'audit_group_topic',
            id: id,
            title: title,
            tags: tags,
            content: excerpt,
            audit_result: audit_result,
            audit_msg: audit_msg
        }

        btn.text("正在提交…");
        btn.attr('disabled', 'disabled');
        $('#group-topic-audit-loading').show();

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: articleData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {

            if (callbackData.jb_result == 0) {
                $('#audit_form_group_topic_id').val('');
                $('#audit_form_group_topic_title').val('');
                $('#audit_form_group_topic_content').val('');
                $('#audit_form_msg').val('');
                $('#audit_result').val('');
                $('#group-topic-audit-loading').hide();

                $('#group-topic-audit-btn').text(callbackData.jb_msg);
                window.location.href = callbackData.jb_topic_url;
            }else{
                $('#group-topic-audit-btn').text("重新提交");
                $('#group-topic-audit-btn').removeAttr('disabled');
                $('#group-topic-audit-tips').show();
                $('#group-topic-audit-tips').html(callbackData.jb_msg);
                $('#group-topic-audit-loading').hide();
            }
        });

        ajaxSubmitReq.fail(function (d, c) {

            $('#group-topic-audit-btn').text("重新提交审核");
            $('#group-topic-audit-btn').removeAttr('disabled');
            $('#group-topic-audit-loading').hide();
        });
    }
}

function create_group(btn, action_name,parent_group_id, group_name, group_desc){

    if (group_name == '' || group_desc === '') {
        alert("请填写小组名称和简介");
    }else{

        btn.text('创建中…');
        $('#create-group-tips').show();

        var groupData = {
            action: action_name,
            parentGroupId: parent_group_id,
            groupName: group_name,
            groupDesc: group_desc
        }

        var ajaxSubmitReq = $.ajax({
            url: JobboleAjax.ajaxurl,
            type: "POST",
            data: groupData,
            dataType: "json"
        });

        ajaxSubmitReq.done(function (callbackData) {
            if(callbackData.jb_result == 0){
                btn.text(callbackData.jb_msg);
                window.location.href = callbackData.jb_group_url;
            }else{
                btn.text('重新提交');
                $('#create-group-tips').html(callbackData.jb_msg);
            }
        });

        ajaxSubmitReq.fail(function (d, c) {
            btn.text('重新提交');
            $('#create-group-tips').html('系统出错，请稍后重试');
        });
    }
}

function ajax_follow_group(btn,groupId,followType){
    if (groupId == "" || followType =="") {
        return false;
    }

    btn.text('…');

    var groupData = {
        action: "follow_group",
        groupId: groupId,
        followType: followType
    };

    var ajaxJoinGroupReq = $.ajax({
        url: JobboleAjax.ajaxurl,
        type: "POST",
        data: groupData,
        dataType: "json"
    });

    ajaxJoinGroupReq.done(function (callbackData) {
        if (callbackData.jb_result == 0) {
            btn.text(callbackData.jb_msg);
            btn.attr('data-follow-type',callbackData.jb_follow_type);
        } else {
            show_info_modal("友情提示", callbackData.jb_msg, "确定");
        }
    });

    ajaxJoinGroupReq.fail(function (d, c) {
        show_info_modal("友情提示", '系统出错，请稍后重试', "确定");
    });

    return true;
}

function show_info_modal(title, content, button) {

    jQuery('#info-modal-title').text(title);
    jQuery('#info-modal-content').html(content);
    jQuery('#info-modal-button').text(button);

    jQuery('#info-modal').modal('show');
}

function back_to_top() {
    // fade in #back-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-top').fadeIn(1000);
        } else {
            $('#back-top').fadeOut(1000);
        }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}