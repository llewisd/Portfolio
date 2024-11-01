<template>
     <div>
          <AppWrapper>
               <AppHeader />
          </AppWrapper>
     </div>
     <div v-if="$route.path === '/home'">
          <AppWrapper>
               <div class="content-block">
                    <div class="title">Introduction</div>
                    <div class="content">
                         <UserAvatar :src="require('@/assets/Me.jpg')" width="200px" height="200px" class="avatar"/>
                         <div class="aside">
                              <div class="paragraph">
                                   {{ displayedText }}
                              </div>
                              <div class="contact">
                                   <div class="link-icon">
                                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100011283584460"><i class="fa-brands fa-facebook" title="My facebook"></i></a>
                                   </div>
                                   <div class="link-icon">
                                        <a target="_blank" href="https://github.com/llewisd"><i class="fa-brands fa-github" title="My github"></i></a>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>

               <div class="skill-block" style="margin-top: 120px">
                    <div class="title">Skills</div>
                    <div class="skill_list">
                         <SkillItem :src="require('@/assets/javascript.png')" alt="javascript logo" skill_name="Javascript" />
                         <SkillItem :src="require('@/assets/python.png')" alt="python logo" skill_name="Python" />
                         <SkillItem :src="require('@/assets/html.png')" alt="html logo" skill_name="HTML" />
                         <SkillItem :src="require('@/assets/css.png')" alt="css logo" skill_name="CSS" />
                         <SkillItem :src="require('@/assets/selenium.png')" alt="selenium logo" skill_name="Selenium" />
                         <SkillItem :src="require('@/assets/github.png')" alt="github logo" skill_name="Github" />
                         <SkillItem :src="require('@/assets/mysql.png')" alt="mysql logo" skill_name="MySQL" />
                         <SkillItem :src="require('@/assets/mongodb.png')" alt="mongodb logo" skill_name="Mongodb" />
                    </div>
               </div>

               <div class="certificate-block" style="margin-top: 120px">
                    <div class="title">Certificates</div>
                    <div class="certificate_list">
                         <CertificateItem name="TOEIC L-R" :point=715 :step=1 />
                         <CertificateItem name="VSTEP B2" :point=7 :step=1 />
                    </div>
               </div>

               <div class="project-block" style="margin-top: 120px; margin-bottom: 100px;">
                    <div class="title">Projects</div>
                    <div class="project_list">
                         <ProjectItem :src="require('@/assets/javascript.png')" alt="javascript logo" name="Comic Website" :id=0 @project-click="handleProjectClick" />
                         <ProjectItem :src="require('@/assets/python.png')" alt="python logo" name="Analysing data about the price of laptop" :id=1 @project-click="handleProjectClick" />
                         <ProjectItem :src="require('@/assets/ai.png')" alt="ai logo" name="Detecting vietnamese toxic comment" :id=2 @project-click="handleProjectClick" />
                         <ProjectItem :src="require('@/assets/ai.png')" alt="ai logo" name="Vietnamese text summarization" :id=3 @project-click="handleProjectClick" />
                    </div>
               </div>

               <DetailDoc v-if="selectedItem" :data="selectedItem" @exit-click="closeDetailDoc" />
          </AppWrapper>
     </div>
     <router-view v-else></router-view>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppWrapper from '@/components/AppWrapper.vue';
import UserAvatar from '@/components/UserAvatar.vue';
import ProjectItem from '@/components/ProjectItem.vue';
import DetailDoc from '@/components/DetailDoc.vue';
import SkillItem from '@/components/SkillItem.vue';
import CertificateItem from '@/components/CertificateItem.vue';
export default {
     name: "HomePage",
     components: {
          AppHeader,
          AppWrapper,
          UserAvatar,
          ProjectItem,
          DetailDoc,
          SkillItem,
          CertificateItem
     },
     data() {
          return {
               text: "Hi, My name is Nguyen Viet Tien. I'm 22 years old. \nI'm a backend developer.",
               displayedText: "",
               index: 0,
               data : [
               {
                    title: "Comic Website",
                    form: "Individual",
                    tech: "Javascript, Express, Ejs, Mongodb",
                    description: "Build front end and backend for reading comic website. Functions : login/signup, forget password, authentication, authorization, pagination , create - delete - change comics, create - delete - change comments.",
                    livedemo: "https://drive.google.com/file/d/1V_dehjlXgyU0xEzFcT1M8K6NuTRtqMep/view?usp=drive_link",
                    sourcecode: "https://github.com/llewisd/tutientruyen"
               },
               {
                    title: "Analysing data about the price of laptop",
                    form: "Group",
                    tech: "Python, Matplotlib, Selenium",
                    description: "Use Selenium to collect data of laptop from e-commerce website, clean data, analyse data and draw chart",
                    livedemo: "",
                    sourcecode: "https://github.com/llewisd/Collect_and_handle_data"
               },
               {
                    title: "Detecting vietnamese toxic comment",
                    form: "Group",
                    tech: "Python, Sklearn",
                    description: "build machine learning model for detect toxic words in Vietnamese comments on game online, test and evaluate result",
                    livedemo: "",
                    sourcecode: "https://github.com/llewisd/doan_hocmay"
               },
               {
                    title: "Vietnamese text summarization",
                    form: "Individual",
                    tech: "Python, Tranformers, Selenium",
                    description: "use Selenium to collect Vietnamese newspaper from website Tuoi tre magazine, clean data, build deep learning model for summarization",
                    livedemo: "",
                    sourcecode: "https://github.com/llewisd/Doan_deeplearning"
               }
               ],
               selectedItem: null
          };
     },
     mounted() {
          this.typeWriter();
     },
     methods: {
          typeWriter() {
               if (this.index < this.text.length) {
                    this.displayedText += this.text.charAt(this.index);
                    this.index++;
                    setTimeout(this.typeWriter, 30); // Điều chỉnh tốc độ gõ
               }
          },
          handleProjectClick(id) {
               this.selectedItem = this.data[id];
          },
          closeDetailDoc() {
               this.selectedItem = null;
          }
     },
}
</script>

<style scoped>
.content-block {
     margin-top: 40px;
}
.title {
     font-size: 40px;
     font-weight: 700;
     text-align: center;
     font-family: sans-serif;
     margin-bottom: 50px;
     color: var(--theme-color);
}
.content {
     display: flex;
     width: 80%;
     margin: auto;
     column-gap: 50px;
}

.avatar {
     border: 3px solid blue;
     animation: changeBorderColor 3s infinite;
}
.avatar:hover {
     border-color: var(--theme-color);
}

.paragraph {
     box-shadow: 0 0 5px #000;
     border-radius: 10px;
     font-size: 22px;
     font-family: sans-serif;
     min-height: 160px;
     padding: 16px 22px;
     width: 600px;
     background-color: #383636;
     color: #1ce22d;
     line-height: 32px;
     margin-bottom: 20px;
     white-space: pre-wrap;
}

.contact {
     display: flex;
     justify-content: center;
     align-items: center;
     column-gap: 20px;
}

.link-icon a i {
     font-size: 30px;
}

.link-icon:nth-child(1) a i {
     color: blue;
}

@keyframes changeBorderColor {
     0% {
          border-color: blue;
     }
     50% {
          border-color: var(--theme-color);
     }
     100% {
          border-color: green;
     }
}

.project_list {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
     gap: 30px;

}

.skill_list {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: 50px;
     justify-items: center;
}

.certificate_list {
     display: flex;
     justify-content: center;
     align-items: center;
     column-gap: 300px;
}
@media (max-width: 320px) {
     .content {
          flex-direction: column;
          row-gap: 20px;
          width: 100%;
          align-items: center;
     }
     .paragraph {
          width: 100%;
     }
     .certificate_list {
          flex-direction: column;
          row-gap: 30px;
     }
     .project_list {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
     }
}
@media ((min-width: 321px) and (max-width: 425px)) {
     .content {
          flex-direction: column;
          row-gap: 20px;
          width: 100%;
          align-items: center;
     }
     .paragraph {
          width: 100%;
     }
     .certificate_list {
          flex-direction: column;
          row-gap: 30px;
     }
     .project_list {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
     }
}
</style>