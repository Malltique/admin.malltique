import React from "react";

import { AnimatedRoutes } from "./routes/AnimatedRoutes/AnimatedRoutes";
import { withLayout } from "./layout/Layout";

const App = () => <AnimatedRoutes />;

export default withLayout(App);
