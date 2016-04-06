(ns cljs-calculator.core
    (:require [cljs.reader :refer [read-string]]
              [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]))


(def initial-db {:display :op1
                   :op1 ""
                   :op2 ""
                   :operator1 ""
                   :operator2 ""
                   :result ""
                   :zeroes-blocked true})

(def app-db (atom initial-db))

(defn header [color text]
  [:h1
   {:style
    {:color color
     :background-color "blue"}}
   text])

(defn px [num]
  (str num "px"))

(def ops
 {"+" +
  "-" -
  "*" *
  "/" /})

(defn operate []
  (let [db @app-db
        op1 (get db :op1)
        op2 (get db :op2)
        op1-n (read-string op1)
        op2-n (read-string op2)
        operator1 (get db :operator1)
        operator2 (db :operator2)
        op-fn (get ops (get db :operator1))
        result (op-fn op1-n op2-n)]
    (reset! app-db {:op1 (str result)
                    :op2 ""
                    :display :op1
                    :operator1 operator2
                    :operator2 ""
                    :result :op1
                    :zeroes-blocked true})))

(defn clear []
   (reset! app-db initial-db))


(defn buttons [btn]
 [:div
 {:key (pr-str (gensym "button-key-"))
  :on-click

  #(let [db @app-db
         zb (get db :zeroes-blocked)
         display-key (get db :display)
         display-str (get db display-key)
         operator1 (get db :operator1)
         result (get db :result)
         op2 (get db :op2)]
  (cond
   (and (= btn 0) (= zb true))
    nil

   (and (not (some #{"+" "-" "*" "/" "c" "="} (str btn)))
        (< (count display-str) 5) (not= result :op1))
    (do
     (swap! app-db update display-key str btn)
     (swap! app-db assoc :zeroes-blocked false))

   (some #{"+" "-" "*" "/"} (str btn))
    (do
     (swap! app-db assoc :zeroes-blocked true)
       (swap! app-db assoc :result "")
       (swap! app-db assoc :operator1 btn)
       (swap! app-db assoc :display :op2))
  (= btn "=")
  (operate)
  (= btn "c")
  (clear)))
    :style
   {:height (px 40)
    :width (px 40)
    :background-color "blue"
    :position "relative"
    :margin-left (px 20)
    :margin-top (px 5)
    :border-radius (px 5)
    :border "1px solid black"
    :float "left"
    :color "red"
    :text-align "center"
    :font-weight "bold"}}
  btn])

(defn calculator [ ]
  [:div
  {:key (pr-str (gensym "calculator-"))
   :style
    {:height (px 300)
      :width (px 300)
      :background-color "yellow"
      :border "3px solid"
      :border-radius (px 25)
      :position "relative"
      :margin "auto"
      :margin-top "0px"
      :padding-left (px 10)}}
      [:div
      {:key (pr-str (gensym "display-"))
       :style
        {:position "relative"
         :left "50%"
         :margin-left (px -100)
         :margin-top (px 15)
         :margin-bottom (px 15)
         :height (px 30)
         :width (px 200)
         :border-radius (px 5)
         :background-color "white"
         :border "1px solid"
         :text-align "right"
         :padding-right (px 5)}}
         (let [ro (@app-db (@app-db :display))]
          (if (= ro "")
           "0"
           (apply str ro)))]
           (map (fn [n] [buttons n])
              [0 1 2 3 4 5 6 7 8 9 "+" "*" "/" "-" "=" "c"])
      ])

(defn home-page []
  [:div
   [header "red" "Calculator"]
   [:h2
    {:style
     {:color "green"
      :font-size (px 20)
      :margin-top (px 0)}}
    "Made with Clojure"]
    [calculator]])



;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
