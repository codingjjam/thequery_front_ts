import Vue from "vue";

//api interface 정의
interface test {
    promiseTest: Function;
}
interface apis {
    test: test;
}

declare module "vue/types/vue" {
    interface Vue {
        $api: apis;
    }
}
