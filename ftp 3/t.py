from playwright.sync_api import sync_playwright
import os
from PIL import Image
S="/tmp/claude-0/-home-claude/cb739ad7-b6eb-5bce-b0f2-74fee8883048/scratchpad/"
with sync_playwright() as p:
    px=os.environ.get("HTTPS_PROXY");b=p.chromium.launch(proxy={"server":px} if px else None)
    pg=b.new_page(viewport={"width":1440,"height":900},ignore_https_errors=True);pg.on("pageerror",lambda e:print("ERR",e))
    pg.goto("file://"+os.getcwd()+"/index.html");pg.wait_for_timeout(600);pg.screenshot(path=S+"f_load.jpg",type="jpeg",quality=50)
    pg.wait_for_timeout(4500)
    H=pg.evaluate("document.body.scrollHeight");print(1440,pg.evaluate("[typeof Lenis,document.documentElement.scrollWidth]"),H)
    tiles=[S+"f_load.jpg"]
    pg.screenshot(path=S+"f_00.jpg",type="jpeg",quality=50);tiles.append(S+"f_00.jpg")
    for sel,offs in (('#services',[0,900]),('#procwrap',[0,.3,.65,1.0]),('#who',[0]),('#portwrap',[0,.12,.4,.8]),('#cases',[0,700]),('#advantage',[0,500]),('#faq',[0]),('#cta',[0]),('footer',[0])):
        t=pg.evaluate(f"document.querySelector('{sel}').getBoundingClientRect().top+scrollY");h=pg.evaluate(f"document.querySelector('{sel}').offsetHeight")
        for o in offs:
            y=t+(o*(h-900) if isinstance(o,float) else o)
            pg.evaluate(f"window.scrollTo(0,{y-300})");pg.wait_for_timeout(250);pg.evaluate(f"window.scrollTo(0,{y})");pg.wait_for_timeout(1500)
            f=S+f"f_{len(tiles):02d}.jpg";pg.screenshot(path=f,type="jpeg",quality=50);tiles.append(f)
    pg.evaluate('window.scrollTo(0,0)');pg.wait_for_timeout(800);pg.click('#mopen');pg.wait_for_timeout(1200);f=S+"f_menu.jpg";pg.screenshot(path=f,type="jpeg",quality=50);tiles.append(f)
    for part in range(0,len(tiles),9):
        sub=tiles[part:part+9];sh=Image.new('RGB',(1440,((len(sub)+2)//3)*300),'white')
        for i,f in enumerate(sub):sh.paste(Image.open(f).resize((480,300)),((i%3)*480,(i//3)*300))
        sh.save(S+f"F{part//9}.jpg",quality=62)
    print(len(tiles))
    pg=b.new_page(viewport={"width":400,"height":800});pg.on("pageerror",lambda e:print("ERR",e));pg.goto("file://"+os.getcwd()+"/index.html");pg.wait_for_timeout(4500)
    print(400,pg.evaluate("document.documentElement.scrollWidth"))
    H=pg.evaluate("document.body.scrollHeight");ims=[]
    for y in range(0,H,1600):
        pg.evaluate(f"window.scrollTo(0,{y})");pg.wait_for_timeout(900);f=S+f"fm_{len(ims)}.jpg";pg.screenshot(path=f,type="jpeg",quality=50);ims.append(f)
    sh=Image.new('RGB',(200*len(ims[:10]),400));[sh.paste(Image.open(f).resize((200,400)),(i*200,0)) for i,f in enumerate(ims[:10])];sh.save(S+"FM.jpg",quality=60)
    b.close()
