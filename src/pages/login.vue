<template>
    <div class="login-container md-layout md-alignment-top-center">
        <form novalidate class="form-container md-layout md-layout-item md-size-50 md-large-size-40 md-medium-size-50 md-small-size-60" @submit.prevent="validateLogin">
            <md-card class="md-layout-item md-size-100 md-elevation-10">
                <md-card-header>
                    <div class="md-title">登陆</div>
                </md-card-header>
                <md-card-content>
                    <md-field :class="getValidationClass('password')">
                        <label for="password">密码</label>
                        <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.password.required">请输入密码</span>
                    </md-field>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending">登陆</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
    required,
    email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data: () => ({
        form: {
            password: null,
        },
        sending: false
    }),
    validations: {
        form: {
            password: {
                required
            }
        }
    },
    methods: {
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm () {
            this.$v.$reset()
        },
        login () {
            this.sending = true

            this.$store.dispatch("login", {
                password: this.form.password
            }).then(_ => {
                this.sending = false
                this.clearForm()
                console.log(123)

                this.$router.push("/")
            })
        },
        validateLogin () {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.login()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container{
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    background: no-repeat center/cover url("../images/bg.jpg");
}

.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}

.form-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.md-card {
    background: rgba($color: #ffffff, $alpha: 0.9);
}
</style>
