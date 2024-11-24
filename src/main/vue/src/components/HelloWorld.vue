<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      a무엇을 만들까?
    </p>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [], // 데이터를 저장할 배열
      loading: false, // 로딩 상태
      error: null, // 에러 메시지
    };
  },
  mounted() {
    // `this`는 컴포넌트 인스턴스를 나타냅니다.
    console.log('ddddddddddddddd');
    // const response = axios.get("http://localhost:8081/fwMessage");
    // console.log(response);


    axios
        .get("http://localhost:8080/fwMessage")
        .then((response) => {
          // this.items = response.data; // 데이터 저장
          console.log(response.data);
        })
        .catch((err) => {
          // this.error = "Failed to fetch data. Please try again later."; // 에러 처리
          console.log(err);
        })

  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
  methods: {
    
    // async fetchData() {
    //   this.loading = true; // 로딩 시작
    //   this.error = null; // 에러 초기화

    //   try {
    //     // Spring Boot 서버의 API 호출
    //     const response = await axios.get("http://localhost:8081/fwMessage");
    //     console.log(response.data);
    //     this.items = response.data; // 데이터 저장
    //   } catch (err) {
    //     this.error = "Failed to fetch data. Please try again later."; // 에러 처리
    //   } finally {
    //     this.loading = false; // 로딩 종료
    //   }
    // },
  },
  // computed: {
  //   sampleTest() {
  //     const response = axios.get("http://localhost:8081/fwMessage");
  //     console.log(response.data);
  //     return "";
  //   },
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
