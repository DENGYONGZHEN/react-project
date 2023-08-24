import React, { Suspense } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { Mask, DotLoading } from 'antd-mobile';
import routes from './routes';

/**统一路由配置 */
const Element = function Element(props) {
  let { component: Component, meta } = props;

  //修改页面的title
  let { title = '知乎日报 | webapp' } = meta || {};
  document.title = title;

  //获取路由信息，基于属性传递给组件
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    searchParams = useSearchParams();

  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      searchParams={searchParams}
    />
  );
};

export default function Router() {
  return (
    <Suspense
      fallback={
        <Mask visible={true} opacity="thick">
          <DotLoading color="white" />
        </Mask>
      }
    >
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              element={<Element {...route} />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}
