import  {Router} from './router'

const router = new Router()

router.add('/', "index.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add("/universo", "/pages/universo.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()





