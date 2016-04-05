(ns cljs-calculator.core
    (:require [cljs.reader :refer [read-string]]
              [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]))

;; -------------------------
;; Views

(def initial-db {:readout :op1
                   :op1 ""
                   :op2 ""
                   :next-op ""
                   :current-op ""
                   :zeroes-blocked true})

(def app-db (atom initial-db))
;(reset! app-db initial-db)

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
        _ (js/console.log "db start" (pr-str db))
        op1 (get db :op1)
        op2 (get db :op2)
        op1-n (read-string op1)
        op2-n (read-string op2)
        op (get db :next-op)
        op-fn (get ops (get db :next-op))
        result (op-fn op1-n op2-n)]
    (reset! app-db {:op1 (str result)
                    :op2 ""
                    :readout :op1
                    :next-op ""
                    :zeroes-blocked true})
    (js/console.log "db end" (pr-str @app-db))))

  ; (swap! app-db assoc :op1 (read-string (get db :op1)))
  ; (swap! app-db assoc :op2 (read-string (get db :op2)))
  ; (swap! app-db assoc :op1 (get ops (db :next-op))       (db :op1) (db :op2)))
  ; (swap! app-db assoc :op2 "")
  ; (swap! app-db assoc :op1 (str (get db :op1)))
  ; (swap! app-db assoc :readout :op1)))

  (defn clear []
   (reset! app-db initial-db))



(defn buttons [btn]
 [:div

 {:key (pr-str (gensym "button-key-"))
  :on-click
  #(cond

   (and (= btn 0) (= (@app-db :zeroes-blocked) true))
    nil

   (and (not (some #{"+" "-" "*" "/" "c" "="} (str btn)))
        (< (count (@app-db (@app-db :readout)))
           5))
   (do
   (swap! app-db update (@app-db :readout) str btn)
   (swap! app-db assoc :zeroes-blocked false))

   (some #{"+" "-" "*" "/"} (str btn))
    (do
     (swap! app-db assoc :next-op btn)
     (swap! app-db assoc :zeroes-blocked true)
      (if (= (@app-db :op2) "" )
      (swap! app-db assoc :readout :op2)

      (operate)))
   (= btn "=")
   (operate)
   (= btn "c")
   (clear))

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




(defn click-count []
 [:div
  {:on-click #(swap! app-db assoc :click-count (inc (@app-db :click-count)))
   :style
   {:background-color "orange"
    :width 100
    :height 100
    :text-align "center"}}
  [:div "click-count"]
  [:div (str  (@app-db :click-count))]])
  ; dereference value on display

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
      {:key (pr-str (gensym "readout-"))
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
         (let [ro (@app-db (@app-db :readout))]
          (if (= ro "")
           "0"
           (apply str ro)))]
           (map (fn [n] [buttons n])
              [0 1 2 3 4 5 6 7 8 9 "+" "*" "/" "-" "=" "c"])
      ])

(defn home-page []
  [:div
   [click-count]
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
