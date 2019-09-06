export default function Sider({ menu = [], className, ...rest } = {}) {
  const [openKeys, setOpenKeys] = useState([])
  const selectedMenuKey = getSelectedMenuKey()

  useEffect(() => {
    let defaultOpenKeys = []

    if (layout === LAYOUT_MAP.OPENHOME) {
      // openhome 只展开当前页面关联的一级菜单
      defaultOpenKeys = menu
        .filter(
          item =>
            item.children &&
            findIndex(item.children, o => o.id === selectedMenuKey) > -1,
        )
        .map(item => item.id)
    } else {
      defaultOpenKeys = menu.filter(item => item.children).map(item => item.id)
    }

    setOpenKeys(defaultOpenKeys)
  }, [menu, selectedMenuKey])
}
