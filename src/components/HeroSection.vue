<template>
  <header id="home" class="hero">
    <div class="container-shell hero-grid">
      <div class="hero-copy fade-in">
        <h1>I build digital products people can <span>actually use.</span></h1>
        <p>Web, mobile, automation, and secure systems built around real workflows, not just impressive screens.</p>
        <div class="hero-actions"><a href="#projects" class="btn-primary">View selected work <i class="bi bi-arrow-down-right"></i></a><a href="#contact" class="btn-secondary">Start a project</a></div>
      </div>
      <div class="hero-showcase scale-in" aria-label="Selected product previews">
        <div class="screen screen-main"><img src="../assets/fingerlings-live.png" alt="Fingerling Online Ordering Platform homepage" /></div>
        <div class="screen screen-secondary"><img src="../assets/qrid-live.png" alt="Ozamiz Schools QR-ID Attendance System" /></div>
      </div>
    </div>
    <div class="proof-strip"><div class="container-shell proof-strip-inner"><strong>Real, working systems for real users.</strong><span>Selected projects below link to deployed products and source code.</span></div></div>
  </header>
</template>
<style scoped>
.hero{min-height:100dvh;display:flex;flex-direction:column;justify-content:space-between;padding-top:74px}.hero-grid{flex:1;display:grid;grid-template-columns:.88fr 1.12fr;gap:clamp(44px,7vw,110px);align-items:center;padding-top:70px;padding-bottom:80px}.hero-copy{position:relative;z-index:2}.hero h1{max-width:680px;margin:0;font-size:clamp(3.35rem,6.5vw,6.9rem);line-height:.95;letter-spacing:-.065em;font-weight:700}.hero h1 span{color:var(--accent)}.hero-copy>p{max-width:590px;margin:30px 0 0;color:var(--text-secondary);font-size:clamp(1.05rem,1.5vw,1.28rem);line-height:1.65}.hero-actions{display:flex;gap:12px;margin-top:36px;flex-wrap:wrap}.hero-showcase{min-height:540px;position:relative;perspective:1200px}.screen{position:absolute;overflow:hidden;border:1px solid rgba(120,174,255,.35);background:#07111d;box-shadow:0 40px 90px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.03)}.screen img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}.screen-main{width:86%;aspect-ratio:1.6;top:18px;right:0;transform:rotateY(-5deg) rotateZ(.5deg);border-radius:12px}.screen-secondary{width:68%;aspect-ratio:1.6;left:0;bottom:5px;border-radius:9px;transform:rotateY(6deg) rotateZ(-1deg)}.proof-strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(7,18,30,.72);backdrop-filter:blur(12px)}.proof-strip-inner{min-height:88px;display:flex;align-items:center;justify-content:center;gap:16px 28px;text-align:center;flex-wrap:wrap}.proof-strip strong{font-size:1rem}.proof-strip span{color:var(--text-secondary);font-size:.93rem}@media(max-width:900px){.hero-grid{grid-template-columns:1fr;padding-top:82px}.hero h1{font-size:clamp(3.2rem,12vw,5.8rem);max-width:740px}.hero-showcase{min-height:480px}}@media(max-width:560px){.hero-grid{padding-top:54px;padding-bottom:54px;gap:50px}.hero h1{font-size:clamp(3rem,15vw,4.35rem)}.hero-actions a{width:100%;justify-content:center}.hero-showcase{min-height:330px}.screen-main{width:94%}.screen-secondary{width:74%}}
</style>
