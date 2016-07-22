(function(window){
    var plibNode = document.scripts[document.scripts.length - 1],
        windowLocation = window.location,
        windowUrl = windowLocation.href,
        plibVersion = (/\/plib\/([\d.]+){1}/gi).exec(plibNode.src)[1],
        cdnDomain = "g.alicdn.com",
        isDebugger = false;


    //判断页面是否是测试或预发环境，并改变cnd地址
    if((/^[0-9.]+/g).test(windowLocation.host)||windowUrl.search(/(\.(wapa|waptest|alibaba-inc)\.|ks-debug|daily.|\:\/\/localhost)/gi)>-1){/*(wapa|waptest|proxy)*/
        isDebugger = true;
        cdnDomain = 'g-assets.daily.taobao.net';
    }
    cdnDomain = windowLocation.protocol+'//'+cdnDomain;
    KISSY.config({
        debug:isDebugger,
        // 开启自动 combo 模式
        combine:!isDebugger,
        packages:[{
                // 包名
                name:"plib",
                charset:"utf-8",
                ignorePackageNameInUri:true,
                // 包对应路径, 相对路径指相对于当前页面路径
                path:cdnDomain+"/sd/plib/"+plibVersion+"/js"
        }]
    });
    /**
     * plib项目配置方法
     * @param data
     */
    window.plibConfig = function(data){
        if(typeof data.cdn==='undefined'||data.cdn===true){
            KISSY.config({
                packages:[{
                    // 包名
                    name:data.name,
                    charset:"utf-8",
                    ignorePackageNameInUri:true,
                    // 包对应路径, 相对路径指相对于当前页面路径
                    path:cdnDomain+"/sd/"+data.dir+"/"+data.version+"/js"
                }]
            });
        }else{

            KISSY.config({
                debug:true,
                // 开启自动 combo 模式
                combine:false,
                packages:[{
                    // 包名
                    name:data.name,
                    charset:"utf-8",
                    ignorePackageNameInUri:true,
                    // 包对应路径, 相对路径指相对于当前页面路径
                    path:data.dir+"/js"
                }]
            });
        }
    };
})(window);