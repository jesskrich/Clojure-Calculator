(ns cljs-calculator.prod
  (:require [cljs-calculator.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
