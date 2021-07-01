require "test_helper"

class LeaveDamagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @leave_damage = leave_damages(:one)
  end

  test "should get index" do
    get leave_damages_url, as: :json
    assert_response :success
  end

  test "should create leave_damage" do
    assert_difference('LeaveDamage.count') do
      post leave_damages_url, params: { leave_damage: { dryBrown: @leave_damage.dryBrown, losingLeaves: @leave_damage.losingLeaves, parasites: @leave_damage.parasites, wetBrown: @leave_damage.wetBrown, yellow: @leave_damage.yellow } }, as: :json
    end

    assert_response 201
  end

  test "should show leave_damage" do
    get leave_damage_url(@leave_damage), as: :json
    assert_response :success
  end

  test "should update leave_damage" do
    patch leave_damage_url(@leave_damage), params: { leave_damage: { dryBrown: @leave_damage.dryBrown, losingLeaves: @leave_damage.losingLeaves, parasites: @leave_damage.parasites, wetBrown: @leave_damage.wetBrown, yellow: @leave_damage.yellow } }, as: :json
    assert_response 200
  end

  test "should destroy leave_damage" do
    assert_difference('LeaveDamage.count', -1) do
      delete leave_damage_url(@leave_damage), as: :json
    end

    assert_response 204
  end
end
