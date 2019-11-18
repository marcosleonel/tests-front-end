<template>
  <el-row class="home">
    <el-col :span="8">
      <h1>Home</h1>
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="Who's your business partner?" id="partner">
          <el-input v-model="form.businessPartner" name="partner"></el-input>
        </el-form-item>

        <el-form-item label="Where did you get your burger?">
          <el-select v-model="form.burger" name="burger" placeholder="Select">
            <el-option label="McDonald's" value="McDonald's"></el-option>
            <el-option label="Wendy's" value="Wendy's"></el-option>
            <el-option label="Jack In The Box" value="Jack In The Box">
            </el-option>
            <el-option label="Big Kahuna" value="Big Kahuna"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="English, mothafucker, Do you speak it?">
          <el-radio-group v-model="form.speakEnglish">
            <el-radio label="No"></el-radio>
            <el-radio label="Yes"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          :label="
            `Describe what ${form.name || 'your business partner'} look like?`
          "
        >
          <el-checkbox-group v-model="form.lookLike" name="lookLike">
            <el-checkbox label="Black" name="black"></el-checkbox>
            <el-checkbox label="Bold" name="bold"></el-checkbox>
            <el-checkbox label="A Bitch" id="bitch"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button id="submit" type="primary" @click="validateForm">
            Submit
          </el-button>
          <el-button @click="resetForm">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script src="./home.js"></script>
